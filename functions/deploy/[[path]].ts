interface Env {
  COOLIFY_TOKEN: string;
}

const COOLIFY_UUIDS: Record<string, string> = {
  marblecreative: 't8kwc4kk8kg0csss0csw4gck',
  marbleldn: 'm4csg44sk48844wwks8ckso8',
  marbleldn_staging: 'j8ggw4ks0wok0ks04g0w8ggk',
};

const ALLOWED_ORIGINS = [
  'https://admin.marblecreative.co.uk',
  'https://backend.marbleldn.com',
  'https://backend-marbleldn.metabuild.ing',
];

export async function onRequest(context: { request: Request; env: Env; params: { path: string } }): Promise<Response> {
  const { request, env, params } = context;
  const origin = request.headers.get('Origin') ?? '';

  const corsHeaders: Record<string, string> = {};
  if (ALLOWED_ORIGINS.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin;
    corsHeaders['Access-Control-Allow-Methods'] = 'GET, OPTIONS';
    corsHeaders['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const uuid = COOLIFY_UUIDS[params.path];
  if (!uuid) {
    return new Response(JSON.stringify({ error: 'unknown project', path: params.path }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const coolifyResp = await fetch(
    `https://app.coolify.io/api/v1/deploy?uuid=${uuid}&force=false`,
    {
      headers: {
        Authorization: `Bearer ${env.COOLIFY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data: unknown = await coolifyResp.json();
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

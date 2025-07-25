import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <main>
        <div id="services" class="wrapper">
            <h1>Nastasiu.Development</h1>
	    <p>We're back, and we're offering:</p>
	    <details>
		<summary>Hosting services</summary>
		<p>Websites, web apps, email server</p>
		<p>Host debugging <br/>
			<small>checking if your website or webapp has enough resources on your current host</small>
		</p>
	    </details>
            <details>
		<summary>Project management consultancy</summary>
		<p>Comprehensive and actionable project management audits</p>
		<p><small>Guidance in setting up a robust framework for managing web development projects</small></p>
	    </details>
	    <div class="divider"></div>
	    <details>
		<summary>Previously</summary>
	        <p>Between 2013 and 2017 we have worked with over 20 clients delivering web solutions tuned to their requirements. We also partnered with agencies and studios to exceed our clients' expectations.</p>
		<p><br />Special mentions to:</p>
		<ul>
	            <li>Ana and Ste from <a href="https://weareloot.com">weareloot.com</a></li>
		    <li>Amra from <a href="https://coldpressedjuicery.co/">coldpressedjuicery.co</a></li>
		    <li>Irina from <a href="https://happyfriday.ro/">happyfriday.co</a></li>
		    <li>Oliver from <a href="https://searchconvert.co.uk/">searchconvert.co.uk</a></li>
		    <li>Henry from <a href="https://toastmedia.co.uk/">toastmedia.co.uk</a></li>
		    <li>Jo from <a href="http://shishiishi.com/">shishiishi.com</a></li>
		    <li>Ligia Goloșoiu from <a href="https://appe.ro/">appe.ro</a></li>
		    <li>Alex and Bogdan from <a href="https://underweb.ro/">underweb.ro</a></li>
		</ul>
	    </details>
	</div>
	<footer>
	    <i className="fa fa-copyright">&copy; 2024 Nastasiu Development S.R.L.</i>
        </footer>
    </main>
  )

})

app.use(
  '/deploy/*',
  cors({
    origin: ['https://admin.marblecreative.co.uk', 'https://backend.marbleldn.com', 'https://backend-marbleldn.metabuild.ing'],
    allowMethods: ['GET']
  })
)

app.all('/deploy/marblecreative', async (c) => {
	const response = await fetch('https://app.coolify.io/api/v1/deploy?uuid=t8kwc4kk8kg0csss0csw4gck&force=false', {
		method: 'GET',
		headers: {
		  'Authorization': `Bearer ${c.env.COOLIFY_TOKEN}`,
		  'Content-Type': 'application/json'
		}
	  });

	  let data = await response.json();
	  return c.json(data);
})
app.all('/deploy/marbleldn', async (c) => {
	const response = await fetch('https://app.coolify.io/api/v1/deploy?uuid=m4csg44sk48844wwks8ckso8&force=false', {
		method: 'GET',
		headers: {
		  'Authorization': `Bearer ${c.env.COOLIFY_TOKEN}`,
		  'Content-Type': 'application/json'
		}
	  });

	  let data = await response.json();
	  return c.json(data);
})
app.all('/deploy/marbleldn_staging', async (c) => {
	const response = await fetch('https://app.coolify.io/api/v1/deploy?uuid=j8ggw4ks0wok0ks04g0w8ggk&force=false', {
		method: 'GET',
		headers: {
		  'Authorization': `Bearer ${c.env.COOLIFY_TOKEN}`,
		  'Content-Type': 'application/json'
		}
	  });

	  let data = await response.json();
	  return c.json(data);
})

export default app

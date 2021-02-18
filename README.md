<h1>MicroFrontend</h1>
<h2>About MicroFrontend</h2>
<p>Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.</p>
<span>
    <a href="https://micro-frontends.org/">Detail Link</a>
</span>
</hr>
<h2>How to run development</h2>
<hr/>
<h3>1. Run VueApp</h3>
<ul>
    <li>open terminal</l1>
    <li>go to folder vueApp</l1>
    <li>npm install</li>
    <li>npm run start</li>
    <li>open browser "http://localhost:8082/"</li>
</ul>
</hr/>
<h3>2. Run ReactApp</h3>
<ul>
    <li>open terminal</l1>
    <li>go to folder vueApp</l1>
    <li>npm install</li>
    <li>npm run start</li>
    <li>open browser "http://localhost:8081/"</li>
</ul>
</hr/>
<h3>3. Run Container</h3>
<ul>
    <li>open terminal</l1>
    <li>go to folder container</l1>
    <li>npm install</li>
    <li>npm run start</li>
    <li>open browser "http://localhost:8080/"</li>
</ul>
<h2>How to run production</h2>
<hr/>
<h3>1. Run VueApp</h3>
<ul>
    <li>open terminal</l1>
    <li>go to folder vueApp</l1>
    <li>npm install</li>
    <li>npm run build</li>
</ul>
</hr/>
<h3>2. Run ReactApp</h3>
<ul>
    <li>open terminal</l1>
    <li>go to folder vueApp</l1>
    <li>npm install</li>
    <li>npm run build</li>
</ul>
</hr/>
<h3>3. Run Container</h3>
<ul>
    <li>open terminal</l1>
    <li>go to folder container</l1>
    <li>npm install</li>
    <li>npm run build</li>
    <li>connect nginx to folder "container/dist"</li>
</ul>
<hr/>
<h5>Nginx.conf</h5>
<pre>
    server_name test-microfrontend.ugiispoyowidodo.com;
    access_log /var/log/nginx/test-microfrontend.ugiispoyowidodo.log;

    root /home/web/test-microfrontend/container/dist;
    index index.html index.htm index.nginx-debian.html;
    location / {
                if (!-e $request_filename){
                rewrite ^(.*)$ /index.html break;
        }
    }
</pre>
<hr/>
<h5>Express</h5>
<pre>
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/home/web/test-microfrontend/container/dist/index.html'), function(err) {
            if (err) {
                res.status(500).send(err)
            }
        })
    })
</pre>
<hr/>
<h5>Apache .htaccess</h5>
<pre>
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</pre>
<hr/>
<p>Note: This container using react framework</p>
<a href="http://test-microfrontend.ugiispoyowidodo.com/" target="_blank">
    Link Demo
</a>
<hr/>
<span>By: Ugi Ispoyo Widodo</span>
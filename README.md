# OBS-to-local-webplayer-HLS-
Stream video using OBS to a webpage. Includes SSL certbot integration.

(Having a domain, Docker and Docker-Compose installed is needed.)

Steps:
1. Set up the webpage:

    - Create a domain redirection to the ip hosting the web.

    - Make sure that the the port 80 and 433 are opened and accesible.

    - Set up your domain name in the "nginx-conf/stream.conf" file replacing "<\<your-domain\>>" with your domain. Example: "google.com"

    - Start the web-server:

        - Start the containers using: ```docker-compose up -d```

        - On the first run:

            - Create the ssl certificate running this command replacing "<\<your-domain\>>" with your domain:

                ```docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d <<your-domain>>```

            - Uncomment the second "server" section in the "nginx-conf/stream.conf" file.

            - Restart the containers using: ```docker-compose restart```

        - If you need to renew the cert, run:

            - ```docker compose run --rm certbot renew```

      

2. Configure OBS. 
    - Steps [here](https://obsproject.com/forum/resources/how-to-do-hls-streaming-in-obs-open-broadcast-studio.945/).

    - Set as output folder, the "video" one.

3. Go to "```https://<<your-domain>>```" and enjoy.
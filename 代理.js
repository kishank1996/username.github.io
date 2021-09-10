[Unit]
Description=forwardproxy-Httpproxy
After=network-online.target
Wants=network-online.target

[Service]
WorkingDirectory=/opt/proxy
ExecStart=/usr/bin/java -jar forwardproxy-1.0-jar-with-dependencies.jar -c /opt/proxy/proxy.properties
LimitNOFILE=100000
Restart=always
RestartSec=30

[Install]
WantedBy=multi-user.target
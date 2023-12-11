To run on port 80:

$ sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 5173
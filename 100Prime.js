#!/usr/bin/env node
var fs = require('fs');
var http = require("http");

function calc_prime(max) {
    var prime_string=[];
    var i=2;
  
	while ( prime_string.length < max ) {
		var j=2;

		while (j<=i) {
			if (j == i) {

			//print (i+" is a prime number !!! ");
			prime_string.push(i);
			//print (prime_string);
			}	
			else if (i % j === 0) {
				//print (i+" isn't a prime number");
				break;

			}
			else {
				//print (i +" isn't divisible by: " + j);
			}
			j++;
		}
		i++;
	}
return prime_string; 
}

var max =100;
//print (calc_prime(max));
var out = calc_prime(max);
//print(out);
var outfile = "100Prime.txt";

fs.writeFileSync(outfile, out);
console.log("Script: "+__filename +"To: "+ outfile);

// create a server
http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    res.end(out.toString());
}).listen(process.env.PORT, process.env.IP);

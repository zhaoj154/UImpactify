BCrypt: based on Blowfish cypher, is an encrpytion that makes hacking the 
Usage: we are using BCrypt to encrypt our passwords by hasing it to a random string
Salts: random data that is used to hash passwords
SaltRounds: the amount of times the password  will be hashed.

Vunerablity: if hackers are able to enter the database(which they shouldn't
with Mongodb's TLS) and obtain the hashed passwords they can use software such 
as Kraken to eventually decypher the original password.
The good news is that due to the SaltRounds it takes linearly more time to crack each 
password with how high we set it. Keeping at 10 is default. Problem since Bcrypt is
designed to take up more time, another system must be in place to prevent malicous users
from finishing their hashes which at the moment we do not have.
https://kraken.nswardh.com/congratulations (Kraken Open-Source)

Overall: our Database should be fairly secure with the only vunerablity
at the moment being the hashed passwords. however to reach the passwords
you'd need to brute force through at least 10 layers of hash and bypass Mongodb's
TLS.
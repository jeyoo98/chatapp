# Password Criteria
This document sets a guideline on the minimum criterias required for passwords generated by users.

## Key Findings
1. Length > Complexity
NIST guidelines calls for a strict eight-character minimum length. Additionally, as password complexity increases, users tend to reuse passwords from account to account, increasing the risk that they could be the victim of a credential stuffing attack if one account is breached.

Instead of forcing users to create more complex passwords, ask them to create longer ones if you want to improve security.

2. Eliminate Periodic Resets
Frequent password changes can actually make security worse. Users who often has to change their password often resort to [changing their passwords in predictable patterns](https://www.sans.org/security-awareness-training/blog/time-password-expiration-die). Therefore if an attacker already knows a user's previous password, it won't be difficult to crack the new one. NIST guidelines state that periodic password-change requirements should be removed for this reason.

3. Mandatory validation of newly created passwords
There should be validation of newly created passwords, as well as any password changes against commonly used, expected, or compromised passwords. Therefore users will be prevented from settings passwords like "password", "123456789" which hackers have already guessed.



# Resources
1. [Password Strength - Wikipedia](https://en.wikipedia.org/wiki/Password_strength)
2. [NIST Password Guidelines and Best Practices for 2020](https://auth0.com/blog/dont-pass-on-the-new-nist-password-guidelines/)
3. [New password guidelines say everything we thought about passwords is wrong](https://venturebeat.com/2017/04/18/new-password-guidelines-say-everything-we-thought-about-passwords-is-wrong/)
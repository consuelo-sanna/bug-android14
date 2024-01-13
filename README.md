# bug-android14

![Build](https://github.com/consuelo-sanna/bug-android14/workflows/Pre%20Merge%20Checks/badge.svg)

This is a React Native Reproducer project to reproduce a bug where network with IPv6 enabled hang for more than 2 minutes for users with Android 14 and data connection with an ISP Provider that support IPv6
the related RN issue can be found at this [link](https://github.com/facebook/react-native/issues/32730)





## Reproduce the issue
- Have a phone with Android 14 installed and data connection with an ISP Provider that support IPv6, like Verizon
- Install and open the app; you will see that the toast notification that signal the response was received does not come back immediately

- Do the same forcing IPv4 connection (through WI-Fi or a VPN) to see the response back in less than a second

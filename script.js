function start() {
      let check = document.getElementById("checkbox");
      check.classList.remove("flex");
      check.classList.add("hidden");
      var pw = document.getElementById("pw");
      pw.classList.add("text-black");
      pw.innerText = generate();
}
function generate() {
      let upper = document.getElementById("upper");
      let lower = document.getElementById("lower");
      let num = document.getElementById("num");
      let special = document.getElementById("special");
      const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberCharset = "0123456789";
      const specialCharset = "!@#$%^&*()_+-=";
      let superCharset = "";
      let password = "";
      let c = 0;
      let length = document.getElementById("length");
      let len;
      if (!upper.checked && !lower.checked && !num.checked && !special.checked)
            return "PLEASE SELECT ANY ONE OF THE CHECKBOX BELOW";
      if (length) len = length.value;
      if (len <= 4) {
            for (let i = 0; i < len; i++) {
                  let randomsetselector = Math.floor(Math.random() * 4);
                  if (randomsetselector == 0 && upper.checked)
                        password +=
                              uppercaseCharset[
                                    Math.floor(
                                          Math.random() *
                                                uppercaseCharset.length
                                    )
                              ];
                  else if (randomsetselector == 1 && lower.checked)
                        password +=
                              lowercaseCharset[
                                    Math.floor(
                                          Math.random() *
                                                lowercaseCharset.length
                                    )
                              ];
                  else if (randomsetselector == 2 && num.checked)
                        password +=
                              numberCharset[
                                    Math.floor(
                                          Math.random() * numberCharset.length
                                    )
                              ];
                  else if (randomsetselector == 3 && special.checked)
                        password +=
                              specialCharset[
                                    Math.floor(
                                          Math.random() * specialCharset.length
                                    )
                              ];
                  else if (upper.checked)
                        password +=
                              uppercaseCharset[
                                    Math.floor(
                                          Math.random() *
                                                uppercaseCharset.length
                                    )
                              ];
                  else if (lower.checked)
                        password +=
                              lowercaseCharset[
                                    Math.floor(
                                          Math.random() *
                                                lowercaseCharset.length
                                    )
                              ];
                  else if (num.checked)
                        password +=
                              numberCharset[
                                    Math.floor(
                                          Math.random() * numberCharset.length
                                    )
                              ];
                  else
                        password +=
                              specialCharset[
                                    Math.floor(
                                          Math.random() * specialCharset.length
                                    )
                              ];
            }
            return password;
      }
      if (upper.checked && c < len) {
            password +=
                  uppercaseCharset[
                        Math.floor(Math.random() * uppercaseCharset.length)
                  ];
            superCharset += uppercaseCharset;
            c++;
      }

      if (lower.checked && c < len) {
            password +=
                  lowercaseCharset[
                        Math.floor(Math.random() * lowercaseCharset.length)
                  ];
            superCharset += lowercaseCharset;
            c++;
      }

      if (num.checked && c < len) {
            password +=
                  numberCharset[
                        Math.floor(Math.random() * numberCharset.length)
                  ];
            superCharset += numberCharset;
            c++;
      }

      if (special.checked && c < len) {
            password +=
                  specialCharset[
                        Math.floor(Math.random() * specialCharset.length)
                  ];
            superCharset += specialCharset;
            c++;
      }
      for (let i = 0; i < len - c; i++) {
            password +=
                  superCharset[Math.floor(Math.random() * superCharset.length)];
      }
      password = shuffle(password);
      console.log(password);
      return password;
}
function shuffle(string) {
      const array = string.split("");
      for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
      }
      return array.join("");
}
let copy = document;
function copytext() {
      console.log(pw.innerHTML);
      if (pw.innerHTML.includes(" ") || pw.innerHTML === "") return;
      navigator.clipboard.writeText(pw.textContent);
      let check = document.getElementById("checkbox");
      check.classList.remove("hidden");
      check.classList.add("flex");
}

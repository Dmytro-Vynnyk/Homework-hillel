var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];
var trustedEmails = [];
var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (emailRegex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);


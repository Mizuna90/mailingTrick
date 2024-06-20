function sendEmail() {
  Email.send({
    // Da bi ovo radilo moras da napravis na elasticMailu nalog i tamo ces da generises security token .
    Host: "smtp.gmail.com",
    Username: "ovdetvojGmailUsername@gmail.com",
    Password: "ovdetvojpassword",
    To: "ovde tvoj mail na koji hoces da primas mejlove@gmail.com",
    From: document.getElementById("email").value,
    Subject: "jbg",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone number: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Poruka poslata"));
}

//https://www.youtube.com/watch?v=sGQSz22U8VM&list=LL&index=3&t=6s&ab_channel=GreatStack
// Takodje ovde sam ti ubacio link koji sam ja koristio za referencu i po kom sam radio
// Indijac jeste malo naporan , ali na kraju videa ti pokazuje i kako da generises sigurnosni token
// plus mozes da ga koristis za neki deo koji ti nije jasan i ne znas kako da ga podesis.

//Ako negde zaskripi zovi buraz :D

function details(Name, date, mail, Textarea) {
    this.Name = Name;
    this.Date = date;
    this.Email = mail;
    this.Textarea = Textarea;
}


$(document).ready(function () {
    $("button#details").click(function () {
        var text = $("#text").val();
        var date = $("#date").val();
        var email = $("#small").val();
        var txtarea = $("#txt").val();
        let Details = new details(text, date, email, txtarea);
        $(".k").append("<li>" + Details.Email + "</li>");
    })
})




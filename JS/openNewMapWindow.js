function openMapsWindow(loc) {
    var mywindow = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

    if (loc == "ny") {
        mywindow.document.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46880.80162840133!2d-73.7128803754944!3d42.744992198897265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0fa74c108773%3A0x33117ef9f5a4723c!2sTroy%2C%20NY!5e0!3m2!1sen!2sus!4v1674405034165!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    } else {
        mywindow.document.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848206936!2d-117.38916252103002!3d32.82481751503743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1674404675456!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    }
}
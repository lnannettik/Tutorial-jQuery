



$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});
  
    $("#logo").on("click", function (e) {
    
        // var file_tessera_sanitaria = $("#tessera_sanitaria").prop("files")[0];
        var logo = $("#logo").prop("files")[0];
    
        var newLogo = new Logo();
        // form_data.append("file_tessera", file_tessera_sanitaria);
        form_data.append("file_tessera", logo);
  
        $.ajax({
            data: form_data,
            url: configData.wsRootServicesUrl + "/api/v1/formmilanxmas/insertFormMilanXmas",
            type: "POST",
            contentType: false, // The content type used when sending data to the server.
            cache: false, // To unable request pages to be cached
            processData: false,
  
        })

        .fail(function(error){
            console.log(error);
        })  
    })
tinymce.init({
    selector: 'textarea#des ',
    
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help'
  });
  tinymce.init({
    selector: 'textarea#des1 ',
  
    height: 1000,
    menubar: false,
    toolbar: false,
    readonly: true,
    branding: false,
    resize: false,
  
      content_css: [
        "/css/viart.css",
        "https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap",
      ],
    

    

    
  });

  tinymce.init({
    selector: 'textarea#pretext ',
    
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help'
  });
  
  tinymce.init({
    selector: 'textarea#card-text ',
  
    height: 200,
    menubar: false,
    toolbar: false,
    readonly: true,
    branding: false,
    resize: false,
  
      content_css: [
        "/css/viart.css",
        "https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap",
      ],
    

    

    
  });
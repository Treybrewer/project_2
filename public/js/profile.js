const nav = document.getElementById('nav'); 
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            nav.style.background = "#4D4e4f";
            nav.style.boxShadow = "0px 4px 2px #33333"
        } else  {
            nav.style.background = "transparent";
            nav.style.boxShadow = "0px 4px 2px #33333"
        } 
    }

    var http = require('http');

    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }).listen(8080);
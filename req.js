function sendFileToTextomate(doc) {
    const url = `https://textomate.com/a/uploadMultiple`;

    const formData = new FormData();
    formData.append("file", doc);

    function reqListener() {
      console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("POST", url);
    oReq.send(formData);
  }

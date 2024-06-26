chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download_image") {
      let image = document.querySelector("img.ril-image-current.ril__image");
      if (image) {
        let imageUrl = image.src;
        let fileName = image.alt || "downloaded_image.jpg";
        
        //Fenetre de sélection
        chrome.runtime.sendMessage({ imageUrl: imageUrl, filename: fileName });
      } else {
        alert("Aucune image trouvée !");
      }
    }
  });  
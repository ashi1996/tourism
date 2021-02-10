const indexCreateImg = (_ar) => {

  _ar.forEach(item => {
    let newImg = new Img("#article_id", item.namePic,item.page ,item.description);
    newImg.render();
  });
}



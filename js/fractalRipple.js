function displacmentWave(el, filterID, displacmentMap, sec, scaleSize) {
  this.filterID = filterID;
  this.xlink = "http://www.w3.org/1999/xlink";
  this.imgUrl = displacmentMap;
  this.feImage = document.querySelector(this.filterID + ' feImage');

  this.el = document.querySelector(el);
  this.fesize
  this.sec = sec
  this.scaleSize = scaleSize

  this.displacmentResize = function () {
    this.imgw = this.el.clientWidth
    this.imgh = this.el.clientHeight
    this.fesize = (this.imgw >= this.imgh) ? this.imgw : this.imgh
    this.feImage.setAttribute('width', this.imgw)
    this.feImage.setAttribute('height', this.imgh)
  }

  this.displacmentResize()

  window.addEventListener('load', function () {
    this.displacmentResize()
    this.feImage.setAttributeNS(this.xlink, "xlink:href", this.imgUrl);
  }.bind(this))

  window.addEventListener('resize', function () {
    this.displacmentResize()
  }.bind(this))

  this.wave()
}

displacmentWave.prototype.wave = function () {
  TweenMax.to(this.filterID + " feImage", 0, {
    attr: {
      width: this.imgw,
      height: this.imgh,
      x: 0,
      y: 0,
    }
  }, 0);
  TweenMax.to(this.filterID + " feImage", this.sec, {
    attr: {
      width: this.fesize * this.scaleSize,
      height: this.fesize * this.scaleSize,
      x: (this.imgw - this.fesize * this.scaleSize) * 0.5,
      y: (this.imgh - this.fesize * this.scaleSize) * 0.5,
    }
  }, 0);

}//fn


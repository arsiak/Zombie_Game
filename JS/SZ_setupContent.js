var image_ids = ["#SZ0_1", '#SZ0_2', '#SZ0_3']
var image_sizes = [ [150, 150], [200, 90], [235, 100] ];

function main_call_setupContent(){
  // resize images
  image_ids.forEach( (index, element) => {
    $(index).css('width', image_sizes[element][0] * ratio);
    $(index).css('height', image_sizes[element][1] * ratio);
  });
}

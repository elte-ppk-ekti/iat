define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Fogyasztás', //Will appear in the data.
		    title : {
		      media : {word : 'Fogyasztás'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'cart.jpg'}, //bevásárló kosár
    			{image : 'mall.jpg'}, //pláza
    			{image : 'market.jpg'}, //piac
    			{image : 'sale.jpg'}, //kirakat
    			{image : 'online-shopping.jpg'}, //webshop
    			{image : 'credit-card.jpg'} //bankkártya
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Negatív', //Attribute label
			title : {
				media : {word : 'Negatív'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Hulladék'},
				{word: 'Túlfogyasztás'},
				{word: 'Pazarlás'},
				{word: 'Adósság'},
				{word: 'Sorban állás'},
				{word: 'Infláció'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pozitív', //Attribute label
			title : {
				media : {word : 'Pozitív'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Akció'},
				{word: 'Kupon'},
				{word: 'Újdonság'},
				{word: 'Öröm'},
				{word: 'Kedvezmény'},
				{word: 'Meglepetés'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://github.com/elte-ppk-ekti/iat/tree/7770829ee08c3973bc195958c6ec41372b733a12/images'
  }}
  );
  });


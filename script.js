function drawAutomata(){

var cy = cytoscape({

container: document.getElementById('cy'),

elements: [

{ data: { id: 'q0' } },

{ data: { id: 'q1' } },

{ data: { source: 'q0', target: 'q1', label:'a'} },

{ data: { source: 'q1', target: 'q1', label:'b'} }

],

style: [

{

selector:'node',

style:{
'label':'data(id)',
'background-color':'blue',
'color':'white'
}

},

{

selector:'edge',

style:{
'label':'data(label)',
'curve-style':'bezier',
'target-arrow-shape':'triangle'
}

}

],

layout:{
name:'circle'
}

});

}

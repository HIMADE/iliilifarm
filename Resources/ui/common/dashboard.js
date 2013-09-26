(function(){
	var win = Ti.UI.currentWindow;
	var tab = Ti.UI.currentTab;
	
	var btn = Ti.UI.createButton({
		title: 'add'
	});
	
	btn.addEventListener('click',function(e){
		var closebtn = Ti.UI.createButton({
			title: "close"
		});
		
		var newwin = Ti.UI.createWindow({
			background: 'purple',
			modal: true,
			rightNavButton: closebtn
		});
		
		closebtn.addEventListener('click',function(e){
			newwin.close();
			newwin = null;
		});
		
		newwin.open();
	});
	
	win.rightNavButton = btn;	
	
})();

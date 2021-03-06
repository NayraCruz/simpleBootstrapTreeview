$(document).ready( function () {
	/* -------------
			Etiquetas
	---------------- */
	$('.treeview li:has(ul)').addClass('parent_li').find(' > span > button.openClose').attr('title', 'Recolher Etiqueta');
	$('.treeview li.parent_li > span > button.openClose').on('click', function(e) {
		var tag = $(this).parent();
		var children = tag.parent('li.parent_li').find(' > ul > li');

		if (children.is(":visible")) {
				children.hide('fast');
				$(this).attr('title', 'Expandir Etiqueta').find(' > i').addClass('fa-plus').removeClass('fa-minus');
		} else {
				children.show('fast');
				$(this).attr('title','Recolher Etiqueta').find(' > i').addClass('fa-minus').removeClass('fa-plus');
		}
		e.stopPropagation();
	});

	/* ----------------------------------------
			Ações da etiqueta - bootstrap popover
	------------------------------------------- */
	$( function () {
		var popover = $('[data-toggle="popover"]');
		popover.popover({
			placement : 'auto right',
			trigger: 'manual',
			template: '<div class="popover treeviewIn" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
			selector: true
		}).click(function(e) {
			$(this).popover('toggle');
			popover.not($(this)).popover('hide');
		});
	});

});
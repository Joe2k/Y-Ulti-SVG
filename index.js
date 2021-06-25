var ids = [
	'_x32__c._ii._bg_3_',
	'_x32__c._ii._bg_2_',
	'_x32__c._i._bg_1_',
	'_x32__b._iii._bg_1_',
	'_x32__b._ii._bg_1_',
	'_x32__b._i._bg_1_',
	'_x32__a._ii._bg_1_',
	'_x32__a._i._bg_1_',
	'_x31_.C.Bg',
	'_x31_.B.Bg',
	'_x31_.A.Bg',
	'_x33__c._bg_1_',
	'_x33__b._bg_1_',
	'_x33__a._bg_1_',
	'Logo_Png_3_',
];

var map = new Map([
	[
		'_x32__c._ii._bg_3_',
		'_x32__c._iii._Hone_technical_game_skills_through_teaching',
	],
	[
		' _x32__c._ii._bg_2_',
		'_x32__c._ii._Develop_Empathy_and_communication_skills',
	],
	[
		' _x32__c._i._bg_1_',
		'_x32__c._i._Earn_income_to_sustain_playing_and_working_towards_other_goals',
	],
	[
		'_x32__b._iii._bg_1_',
		'_x32__b._iii._Expand_social_network_and_awareness_of_opportunities',
	],
	[
		'_x32__b._ii._bg_1_',
		'_x32__b._ii._Losing_builds_humility_x2C__patience_and_a_desire_to_improve',
	],
	[
		'_x32__b._i._bg_1_',
		'_x32__b._i._Winning_reinforces_discipline_and_perseverance',
	],
	[
		'_x32__a._ii._bg_1_',
		'_x32__a._ii._Exposure_to_new_habit_x2C__Value_and_change_stories',
	],
	[
		'_x32__a._i._bg_1_',
		'_x32__a._i._Improvement_in_physical_fitness_and_energy',
	],
	['_x31_.C.Bg', '_x31_._c._Coach_Ultimate'],
	['_x31_.B.Bg', '_x31_._b._Play_Ultimate'],
	['_x31_.A.Bg', '_x31_._a._Practice_Ultimate'],
	[
		'_x33__b._bg_1_',
		'_x33__b._Aspire_and_commit_to_meaningful_goals_x2C__on-field_and_off-field',
	],
	[
		'_x33__a._bg_1_',
		'_x33__a._Make_positive_choices_to_invest_in_self-development__x28_e.g._more_active_involvement_in_their_education_x29_',
	],
	['Logo_Png_3_', ''],
]);
// var arrayIDs = [
// 	'Yellow_x2C__Choice',
// 	'Violet_x2C__Improvement',
// 	'Indigo_x2C__Exposure',
// 	'Yellow_x2C__Practice',
// 	'Y-U_Logo',
// 	'Green_x2C__Aspire_1_',
// 	'Violet_x2C__Expand_1_',
// 	'Orange_x2C__Losing_1_',
// 	'Blue_x2C__Wining_1_',
// 	'Green_x2C__Play_Ultimate_1_',
// 	'Orange_x2C__Multiplier_1_',
// 	'Red_x2C__Hone_1_',
// 	'blue_x2C__Develop',
// 	'Indigo_x2C__Earn',
// 	'Orange_x2C__Coach_1_',
// ];

console.log($('#_x32__c._i._bg_1_'));

ids.forEach(function (id) {
	console.log(id);
	$('[id="' + id + '"]').css('filter', 'grayscale(1)');
	$('[id="' + id + '"]').css('transition', '0.3s');
	$('[id="' + id + '"]').css('transform-origin', 'center center');
	$('[id="' + map.get(id) + '"]').css('filter', 'grayscale(1)');
	$('[id="' + map.get(id) + '"]').css('transition', '0.3s');
	$('[id="' + map.get(id) + '"]').css('transform-origin', 'center center');

	$('[id="' + id + '"]').mouseover(function () {
		$('[id="' + id + '"]').css('filter', 'grayscale(0)');
		$('[id="' + map.get(id) + '"]').css('filter', 'grayscale(0)');
	});
	$('[id="' + id + '"]').mouseout(function () {
		if (
			$('[id="' + id + '"]').css('transform') !==
			'matrix(1.1, 0, 0, 1.1, 0, 0)'
		) {
			$('[id="' + id + '"]').css('filter', 'grayscale(1)');
			$('[id="' + map.get(id) + '"]').css('filter', 'grayscale(1)');
		}
	});
	$('[id="' + id + '"]').click(function () {
		if (
			$('[id="' + id + '"]').css('transform') ===
			'matrix(1.1, 0, 0, 1.1, 0, 0)'
		) {
			ids.forEach(function (id) {
				$('[id="' + id + '"]').css('transform', 'scale(1)');
				$('[id="' + map.get(id) + '"]').css('transform', 'scale(1)');
			});
		} else {
			ids.forEach(function (id) {
				$('[id="' + id + '"]').css('transform', 'scale(1)');
				$('[id="' + map.get(id) + '"]').css('transform', 'scale(1)');
			});
			$('[id="' + id + '"]').css('transform', 'scale(1.1)');
			$('[id="' + id + '"]').css('filter', 'grayscale(0)');
			$('[id="' + map.get(id) + '"]').css('transform', 'scale(1.1)');
			$('[id="' + map.get(id) + '"]').css('filter', 'grayscale(0)');
		}
	});
});

describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

  it('should filter foods by favorite', function() {
    var mockedList = [{
      name: 'Test 1',
      favoriteFood: 'Cheeseburger'
    }, {
      name: 'Test 2',
      favoriteFood: 'Pizza'
    }, {
      name: 'Test 3',
      favoriteFood: 'Hotdog'
    }]

    expect(favoriteFood(mockedList, 'Pizza').length).toEqual(1);
  })
	
});

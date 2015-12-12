// describe('Testing routes', function() {
// beforeEach(module('esports'));

// var location, route, rootScope;

// beforeEach(inject(
//     function( _$location_, _$route_, _$rootScope_ ) {
//         location = _$location_;
//         route = _$route_;
//         rootScope = _$rootScope_;
// }));

//  describe('Ladders Route', function() {
//     beforeEach(inject(
//         function($httpBackend) {
//             $httpBackend.expectGET('ladders')
//             .respond(200);
//         }));

//     it('should load the login page on successful load of /login', function() {
//         location.path('/ladders');
//         rootScope.$digest();
//         expect(route.current.controller).toBe('LaddersController');
//     });
//     });
// });
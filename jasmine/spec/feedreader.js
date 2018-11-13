/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    describe('RSS Feeds', function() {
        /* Ensures the allFeeds variable 
         * has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensures that each feed has a URL defined
         * and that the URL is not empty.
         */
         it('each has URL', function() {
         	for (let feed of allFeeds) {
         		expect(feed.url).toBeDefined();
         		expect(feed.url.constructor).toBe(String);
         		expect(feed.url).not.toBe('');
         	}
         })

        /* Ensures each feed has a name defined
         * and that the name is not empty.
         */
         it('each has name', function() {
         	for (let feed of allFeeds) {
         		expect(feed.name).toBeDefined();
         		expect(feed.url.constructor).toBe(String);
         		expect(feed.name).not.toBe('');
         	}
         })
    });

	describe('The menu', function() {
        /* Ensures the menu element is
         * hidden by default.
         */
        it('hidden  by default', function() {
        	let isHidden = document.body.classList.contains('menu-hidden');
        	expect(isHidden).toBe(true);
        });

         /* Ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
          
        it('visibility changes when menu icon is clicked', function() {
        	let menuIcon = document.querySelector('a.menu-icon-link');
        	menuIcon.click();
        	expect(document.body.classList.contains('menu-hidden')).toBe(false);
        	menuIcon.click();
        	expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
    	
        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
         	loadFeed (1, done);
         });

         it ('has entries in .feed container', function() {
         	let feedContainer = document.querySelector('div.feed');
         	expect($('.feed .entry').length).toBeGreaterThan(0);
         });
	});

    describe('New Feed Selection', function() {

        /* Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         let firstFeed, secondFeed;

         beforeEach(function(done) {
         	loadFeed(3, function() {
         		firstFeed = document.querySelector('div.feed').innerHTML;
         		loadFeed(2, function() {
         			secondFeed = document.querySelector('div.feed').innerHTML;
         			done();
         		});
         	});
         });

         it('content changes', function() {
         	expect(firstFeed).not.toBe(secondFeed);
         });
    });

}());

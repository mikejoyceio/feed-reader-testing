/**
 * @file Feed Reader Spec File
 * @fileOverview Jasmine spec file that will read and contains all of the tests
 * that will be run against the Feed Reader application.
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/* All tests are contained within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

		/**
		 * Increase the default timeout for an asynchronous spec to finish.
		 * @external 'jasmine.DEFAULT_TIMEOUT_INTERVAL'
		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-47}
		 */
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    /**
    * RSS Feeds
    * This suite is all about the RSS feeds definitions, the allFeeds
    * array in the application.
    * @external 'describe()'
    * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
    */
    describe('RSS Feeds', function() {

        /**
         * Test to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         **/
        it('are defined', function() {

        		/**
        		 * @external 'expect()'
        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
        		 */
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * Loop through each feed in the allFeeds object and ensures it
         * has a URL defined and that the URL is not empty.
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
        it('URLs are defined', function() {

        		/** Loop through each object in the all feeds array */
	        	for (object in allFeeds) {
	        			/**
		        		 * @external 'expect()'
		        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
		        		 * @external 'toBeDefined()'
		        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
		        		 */
	        			expect(allFeeds[object].url).toBeDefined();
	        			expect(allFeeds[object].url).toMatch("http://");
	        	}
        });

        /**
         * Loop through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty.
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
        it('names are defined', function() {

        		/** Loop through each object in the all feeds array */
	        	for (object in allFeeds) {
	        			/**
		        		 * @external 'expect()'
		        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
		        		 * @external 'toBeDefined()'
		        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
		        		 */
	        			expect(allFeeds[object].name).toBeDefined();
	        	}
        });
    });

    /**
     * The Menu
     * This suite is all about the main menu that slides in and out of view.
     * @external 'describe()'
     * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
     */
    describe('The Menu', function() {

        /**
         * Ensure the menu element is hidden by default.
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
         it('is hidden', function() {

	     		    /**
	        		 * @external 'expect()'
	        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
	        		 * @external 'toBe()'
	        		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
	        		 * @external 'hasClass()'
	        		 * @see {@link https://api.jquery.com/hasclass/}
	        		 */
	         		expect($('body').hasClass('menu-hidden')).toBe(true);
         });


         /**
          * Ensure that the menu changes visibility when the menu icon is clicked.
          * @external 'it()'
          * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
          */
         it('visibility toggles on menu icon click', function() {

						 /**
							* @external 'expect()'
							* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
							* @external 'toBeDefined()'
							* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
							* @external 'hasClass()'
							* @see {@link https://api.jquery.com/hasclass/}
							* @external 'click()'
							* @see {@link https://api.jquery.com/click/}
							*/
							$('.menu-icon-link').click();
							expect($('body').hasClass('menu-hidden')).toBe(false);

							$('.menu-icon-link').click();
							expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    /**
     * Inital Entries
     * This suite ensures feed entries are populated.
     * @external 'describe()'
     * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
     */
    describe('Initial Entries', function() {

        /**
         * Ensure that the loadFeed function is called and completes
         * its work, there is at least a single .entry element within
         * the .feed container.
         * @external 'beforeEach()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Setup_and_Teardown}
         */
        beforeEach(function(done) {

	    			/**
	     			 * LoadFeed - make a call to the application's loadFeed function.
	     			 * @param {number}
	     			 */
	        	loadFeed(0, function() {

        			/**
        			 * @external '.done()'
        			 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-46}
        			 */
	        		done();
	        	});
        });

        /**
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
    		 * @external 'expect()'
    		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
    		 * @external 'toBeGreaterThan()'
    		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
         */
        it('feed loads', function() {
        		expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });
    });

    /**
     * New Feed Selection
     * This suite ensures that feed selection functions correctly.
     * @external 'describe()'
     * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
     */
    describe('New Feed Selection', function() {

    		/**
    		 * Initial Feed - holds the inital feed HTML
    		 * @type {string}
    		 */
    		var initialFeed;
    		/**
    		 * Updated Feed - holds the updated feed HTML
    		 * @type {string}
    		 */
    		var updatedFeed;

        /**
         * Ensure that a new feed is loaded by the loadFeed function and
         * that the content actually changes.
         * @external 'beforeEach()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Setup_and_Teardown}
         */
       	beforeEach(function(done) {

       			/**
       			 * LoadFeed - make a call to the application's loadFeed function.
       			 * @param {number}
       			 */
	        	loadFeed(1, function() {

	        		/** Set the initial feed HTML */
	        		initialFeed = $('.feed').html();

		        	/**
	       			 * LoadFeed - make a call to the application's loadFeed function.
	       			 * @param {number}
	       			 */
	        		loadFeed(2, function() {

	        			/** Set the updated feed HTML */
	        			updatedFeed = $('.feed').html();

	        			/**
	        			 * @external '.done()'
	        			 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-46}
	        			 */
	        			done();
	        		});
	        	});
       	});

        /**
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
        it('feed content updates', function() {

        		/**
		    		 * @external 'expect()'
		    		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
		    		 * @external 'not.toEqual()'
		    		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
        		 */
        		expect(initialFeed).not.toEqual(updatedFeed);
        });
   	});

    /**
     * Loading Animation
     * This suite ensures that the loading animation is visible/hidden.
     * where appropriate.
     * @external 'describe()'
     * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
     */
   	describe('Loading Animation', function() {

        /**
         * Ensure that the loading animation is hidden by default.
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
   			it('animation is hidden by default', function() {

 						/**
						* @external 'expect()'
						* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
						* @external 'toBe()'
						* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
						* @external 'hasClass()'
						* @see {@link https://api.jquery.com/hasclass/}
						*/
   					expect($('body').hasClass('loading-animation-hidden')).toBe(true);
   					expect($('.loader').is(':hidden')).toBe(true);
   			});

        /**
         * Ensure that the loading animation is visible on feed selection.
         * @external 'it()'
         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
   			it('animation is visible on feed selection', function() {

					 /**
						* @external 'expect()'
						* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
						* @external 'toBe()'
						* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
						* @external 'click()'
						* @see {@link https://api.jquery.com/click/}
						*/
   					$('.feed-list li:first-child a').click();
   					expect($('body').hasClass('loading-animation-hidden')).toBe(false);
   					expect($('.loader').is(':visible')).toBe(true);
   			});

        /**
         * Ensure that the loading animation is hidden when the feed is loaded
         * succesfully.
    		 * @external 'describe()'
     		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
   			describe('On Feed Load', function() {

   					/**
   					 * Ensure that the loadFeed function is called and completes before running the spec.
             * @external 'beforeAll()'
         		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-Setup_and_Teardown}
   					 */
		       	beforeAll(function(done) {

			       	  /**
		       			 * LoadFeed - make a call to the application's loadFeed function.
		       			 * @param {number}
		       			 */
			        	loadFeed(1, function() {

					        	/**
			        			 * @external '.done()'
			        			 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-46}
			        			 */
			        			done();
			        	});
		       	});

		        /**
		         * @external 'it()'
		         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
		         */
		       	it('animation is hidden', function() {

							 /**
								* @external 'expect()'
								* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
								* @external 'toBe()'
								* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
								* @external 'hasClass()'
								* @see {@link https://api.jquery.com/hasclass/}
								* @external 'is()'
								* @see {@link http://api.jquery.com/is/}
								*/
		       			expect($('body').hasClass('loading-animation-hidden')).toBe(true);
		       			expect($('.loader').is(':hidden')).toBe(true);
		       	});
   			});

        /**
         * Ensure that the loading animation is hidden the feed is loaded
         * unsuccessfully.
         * @external 'describe()'
     		 * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
         */
   			describe('On Feed Load Error', function() {

   					/**
   					 * Make a call to a function that handles ajax request errors.
   					 * (not yet defined in the application)
   					 */
						handleError();

		        /**
		         * @external 'it()'
		         * @see {@link http://jasmine.github.io/2.1/introduction.html#section-It&rsquo;s_Just_Functions}
		         */
		       	it('animation is hidden', function() {

		       		 /**
								* @external 'expect()'
								* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Expectations}
								* @external 'toBe()'
								* @see {@link http://jasmine.github.io/2.1/introduction.html#section-Included_Matchers}
								* @external 'hasClass()'
								* @see {@link https://api.jquery.com/hasclass/}
								* @external 'is()'
								* @see {@link http://api.jquery.com/is/}
								*/
		       			expect($('body').hasClass('loading-animation-hidden')).toBe(true);
		       			expect($('.loader').is(':hidden')).toBe(true);
		       	});
   			});

   	});
}());

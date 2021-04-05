var MyBox2D = Framework.Class(Framework.Level, {
		load : function () {
			this.box2D = new Framework.Box2D();
			this.box2D.createWorld();
			this.box2D.setContactListener();
			this.background = new Framework.Sprite(define.imagePath+"SelectorScreen_Background.bmp");
			this.backgroundLand = new Framework.Sprite(define.imagePath+"SelectorScreen_Land-1.png");
			this.tomb = new Framework.Sprite(define.imagePath+"tomb.png");
			this.tree = new Framework.Sprite(define.imagePath+"tree.png");
			this.startAdventure = new Framework.Sprite(define.imagePath+"startAdventure_dark.png");
			this.survival = new Framework.Sprite(define.imagePath+"survival.png");
			this.mini_games = new Framework.Sprite(define.imagePath+"mini-games.png");
			this.puzzle = new Framework.Sprite(define.imagePath+"puzzle.png");
			
			this.background.position ={
				x:800,
				y:450
			};
			this.backgroundLand.position ={
				x:800,
				y:600
			};
			this.tomb.position ={
				x:1100,
				y:450
			};
			this.tree.position ={
				x:330,
				y:450
			};
			this.startAdventure.position ={
				x:1350,
				y:140
			};
			this.survival.position ={
				x:1320,
				y:300
			};
			this.mini_games.position ={
				x:1320,
				y:440
			};
			this.puzzle.position ={
				x:1320,
				y:560
			};
		},
		
		initialize : function () {
			this.rootScene.attach(this.background)
			this.rootScene.attach(this.backgroundLand)
			this.rootScene.attach(this.tomb)
			this.rootScene.attach(this.tree)
			this.rootScene.attach(this.startAdventure)
			this.rootScene.attach(this.survival)
			this.rootScene.attach(this.mini_games)
			this.rootScene.attach(this.puzzle)
		
}});

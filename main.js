/***********************************

	main.js

	平成20周年ライダーゲーム

************************************/

//phina.js をグローバル領域に展開
phina.globalize();

var DEBUG_FLG = false;	//false:デバッグなし true:デバッグあり


///////////////////////////////

//jsonリザルト表示用テキスト

///////////////////////////////
var clear_text_data = [
	{
		id: 0,
		name: "仮面ライダーカブト",
		form: "ハイパーフォーム",
	},
	{
		id: 1,
		name: "仮面ライダーカブト",
		form: "",
	},
	{
		id: 2,
		name: "仮面ライダーファイズ",
		form: "アクセルフォーム",
	},
	{
		id: 3,
		name: "仮面ライダードライブ",
		form: "タイプフォーミュラ",
	},
	{
		id: 4,
		name: "仮面ライダーエグゼイド",
		form: "ムテキゲーマー",
	},
	{
		id: 5,
		name: "仮面ライダーオーズ",
		form: "ラトラータコンボ",
	},
	{
		id: 6,
		name: "仮面ライダードライブ",
		form: "タイプトライドロン",
	},
	{
		id: 7,
		name: "仮面ライダービルド",
		form: "ジーニアスフォーム",
	},
	{
		id: 8,
		name: "仮面ライダーエグゼイド",
		form: "マキシマムゲーマー レベル99",
	},
	{
		id: 9,
		name: "仮面ライダークウガ",
		form: "ライジングドラゴン",
	},
	{
		id: 10,
		name: "仮面ライダークウガ",
		form: "アルティメットフォーム",
	},
	{
		id: 11,
		name: "仮面ライダー響鬼",
		form: "装甲",
	},
	{
		id: 12,
		name: "仮面ライダービルド",
		form: "タンクタンクフォーム",
	},
	{
		id: 13,
		name: "仮面ライダービルド",
		form: "ラビットラビットフォーム",
	},
	{
		id: 14,
		name: "仮面ライダービルド",
		form: "ラビットタンクハザードフォーム",
	},
	{
		id: 15,
		name: "仮面ライダーキバ",
		form: "ガルルフォーム",
	},
	{
		id: 16,
		name: "仮面ライダードライブ",
		form: "タイプスピード",
	},
	{
		id: 17,
		name: "仮面ライダークウガ",
		form: "ドラゴンフォーム",
	},
	{
		id: 18,
		name: "仮面ライダークウガ",
		form: "アメイジングマイティ",
	},
	{
		id: 19,
		name: "仮面ライダー響鬼",
		form: "紅",
	},
	{
		id: 20,
		name: "仮面ライダーエグゼイド",
		form: "ダブルアクションゲーマー レベルXX R",
	},
	{
		id: 21,
		name: "仮面ライダーエグゼイド",
		form: "ダブルアクションゲーマー レベルXX L",
	},
	{
		id: 22,
		name: "仮面ライダービルド",
		form: "ラビットタンクスパークリングフォーム",
	},
	{
		id: 23,
		name: "仮面ライダーエグゼイド",
		form: "ダブルアクションゲーマー レベルX",
	},
	{
		id: 24,
		name: "仮面ライダービルド",
		form: "海賊レッシャーフォーム",
	},
	{
		id: 25,
		name: "仮面ライダーエグゼイド",
		form: "ハンターアクションゲーマー レベル5 ",
	},
	{
		id: 26,
		name: "仮面ライダーエグゼイド",
		form: "バーガーアクションゲーマー レベル4",
	},
	{
		id: 27,
		name: "仮面ライダービルド",
		form: "ラビットタンクフォーム",
	},
	{
		id: 28,
		name: "仮面ライダー響鬼",
		form: "",
	},
	{
		id: 29,
		name: "仮面ライダーキバ",
		form: "エンペラーフォーム",
	},
	{
		id: 30,
		name: "仮面ライダーエグゼイド",
		form: "スポーツアクションゲーマー レベル3",
	},
	{
		id: 31,
		name: "仮面ライダークウガ",
		form: "ライジングマイティ",
	},
	{
		id: 32,
		name: "仮面ライダークウガ",
		form: "ライジングペガサス",
	},
	{
		id: 33,
		name: "仮面ライダーダブル",
		form: "ファングジョーカー",
	},
	{
		id: 34,
		name: "仮面ライダーエグゼイド",
		form: "アクションゲーマー レベル2",
	},
	{
		id: 35,
		name: "仮面ライダージオウ",
		form: "ディケイドアーマー",
	},
	{
		id: 36,
		name: "仮面ライダーオーズ",
		form: "プトティラコンボ",
	},
	{
		id: 37,
		name: "仮面ライダーゴースト",
		form: "ムゲン魂",
	},
	{
		id: 38,
		name: "仮面ライダー電王",
		form: "ライナーフォーム",
	},
	{
		id: 39,
		name: "仮面ライダービルド",
		form: "ライオンクリーナーフォーム",
	},
	{
		id: 40,
		name: "仮面ライダー電王",
		form: "ウイングフォーム",
	},
	{
		id: 41,
		name: "仮面ライダービルド",
		form: "トラユーフォーフォーム",
	},
	{
		id: 42,
		name: "仮面ライダーアギト",
		form: "シャイニングフォーム",
	},
	{
		id: 43,
		name: "仮面ライダー電王",
		form: "ガンフォーム",
	},
	{
		id: 44,
		name: "仮面ライダー電王",
		form: "クライマックスフォーム",
	},
	{
		id: 45,
		name: "仮面ライダーディケイド",
		form: "コンプリートフォーム",
	},
	{
		id: 46,
		name: "仮面ライダーダブル",
		form: "ルナジョーカー",
	},
	{
		id: 47,
		name: "仮面ライダーダブル",
		form: "CJエクストリーム",
	},
	{
		id: 48,
		name: "仮面ライダーオーズ",
		form: "タジャドルコンボ",
	},
	{
		id: 49,
		name: "仮面ライダーゴースト",
		form: "ゴエモン魂",
	},
	{
		id: 50,
		name: "仮面ライダーエグゼイド",
		form: "ロボットアクションゲーマー レベル3",
	},
	{
		id: 51,
		name: "仮面ライダージオウ",
		form: "ビルドアーマー",
	},
	{
		id: 52,
		name: "仮面ライダーウィザード",
		form: "ハリケーンスタイル",
	},
	{
		id: 53,
		name: "仮面ライダーウィザード",
		form: "ハリケーンドラゴン",
	},
	{
		id: 54,
		name: "仮面ライダーウィザード",
		form: "オールドラゴン",
	},
	{
		id: 55,
		name: "仮面ライダービルド",
		form: "ニンニンコミックフォーム",
	},
	{
		id: 56,
		name: "仮面ライダージオウ",
		form: "エグゼイドアーマー",
	},
	{
		id: 57,
		name: "仮面ライダークウガ",
		form: "ライジングタイタン",
	},
	{
		id: 58,
		name: "仮面ライダーアギト",
		form: "ストームフォーム",
	},
	{
		id: 59,
		name: "仮面ライダーアギト",
		form: "トリニティフォーム",
	},
	{
		id: 60,
		name: "仮面ライダー龍騎",
		form: "サバイブ",
	},
	{
		id: 61,
		name: "仮面ライダーオーズ",
		form: "タトバコンボ",
	},
	{
		id: 62,
		name: "仮面ライダーブレイド",
		form: "ジャックフォーム",
	},
	{
		id: 63,
		name: "仮面ライダーゴースト",
		form: "ロビン魂",
	},
	{
		id: 64,
		name: "仮面ライダーウィザード",
		form: "ウォータースタイル",
	},
	{
		id: 65,
		name: "仮面ライダーウィザード",
		form: "ウォータードラゴン",
	},
	{
		id: 66,
		name: "仮面ライダーゴースト",
		form: "ビリー・ザ・キッド魂",
	},
	{
		id: 67,
		name: "仮面ライダージオウ",
		form: "オーズアーマー",
	},
	{
		id: 68,
		name: "仮面ライダーアギト",
		form: "グランドフォーム",
	},
	{
		id: 69,
		name: "仮面ライダー龍騎",
		form: "",
	},
	{
		id: 70,
		name: "仮面ライダーファイズ",
		form: "ブラスターフォーム",
	},
	{
		id: 71,
		name: "仮面ライダーキバ",
		form: "ドガバキフォーム",
	},
	{
		id: 72,
		name: "仮面ライダーウィザード",
		form: "フレイムスタイル",
	},
	{
		id: 73,
		name: "仮面ライダーウィザード",
		form: "フレイムドラゴン",
	},
	{
		id: 74,
		name: "仮面ライダーウィザード",
		form: "インフィニティー",
	},
	{
		id: 75,
		name: "仮面ライダージオウ",
		form: "",
	},
	{
		id: 76,
		name: "仮面ライダーゴースト",
		form: "グレイトフル魂",
	},
	{
		id: 77,
		name: "仮面ライダービルド",
		form: "キードラゴンフォーム",
	},
	{
		id: 78,
		name: "仮面ライダービルド",
		form: "スマホウルフフォーム",
	},
	{
		id: 79,
		name: "仮面ライダークウガ",
		form: "マイティフォーム",
	},
	{
		id: 80,
		name: "仮面ライダークウガ",
		form: "ペガサスフォーム",
	},
	{
		id: 81,
		name: "仮面ライダー電王",
		form: "ソードフォーム",
	},
	{
		id: 82,
		name: "仮面ライダーダブル",
		form: "サイクロンジョーカー",
	},
	{
		id: 83,
		name: "仮面ライダーオーズ",
		form: "ガタキリバコンボ",
	},
	{
		id: 84,
		name: "仮面ライダーゴースト",
		form: "リョウマ魂",
	},
	{
		id: 85,
		name: "仮面ライダーゴースト",
		form: "闘魂ブースト魂",
	},
	{
		id: 86,
		name: "仮面ライダージオウ",
		form: "鎧武アーマー",
	},
	{
		id: 87,
		name: "仮面ライダーアギト",
		form: "フレイムフォーム",
	},
	{
		id: 88,
		name: "仮面ライダー鎧武",
		form: "イチゴアームズ",
	},
	{
		id: 89,
		name: "仮面ライダー鎧武",
		form: "ジンバーレモン",
	},
	{
		id: 90,
		name: "仮面ライダービルド",
		form: "ローズコプターフォーム",
	},
	{
		id: 91,
		name: "仮面ライダーブレイド",
		form: "",
	},
	{
		id: 92,
		name: "仮面ライダーゴースト",
		form: "ムサシ魂",
	},
	{
		id: 93,
		name: "仮面ライダーファイズ",
		form: "",
	},
	{
		id: 94,
		name: "仮面ライダーフォーゼ",
		form: "エレキステイツ",
	},
	{
		id: 95,
		name: "仮面ライダーフォーゼ",
		form: "ファイヤーステイツ",
	},
	{
		id: 96,
		name: "仮面ライダーフォーゼ",
		form: "コズミックステイツ",
	},
	{
		id: 97,
		name: "仮面ライダー鎧武",
		form: "極アームズ",
	},
	{
		id: 98,
		name: "仮面ライダーゴースト",
		form: "オレ魂",
	},
	{
		id: 99,
		name: "仮面ライダービルド",
		form: "ホークガトリングフォーム",
	},
	{
		id: 100,
		name: "仮面ライダーウィザード",
		form: "ランドスタイル",
	},
	{
		id: 101,
		name: "仮面ライダーウィザード",
		form: "ランドドラゴン",
	},
	{
		id: 102,
		name: "仮面ライダー鎧武",
		form: "オレンジアームズ",
	},
	{
		id: 103,
		name: "仮面ライダーゴースト",
		form: "ヒミコ魂",
	},
	{
		id: 104,
		name: "仮面ライダーアギト",
		form: "バーニングフォーム",
	},
	{
		id: 105,
		name: "仮面ライダーキバ",
		form: "バッシャーフォーム",
	},
	{
		id: 106,
		name: "仮面ライダーディケイド",
		form: "",
	},
	{
		id: 107,
		name: "仮面ライダーオーズ",
		form: "シャウタコンボ",
	},
	{
		id: 108,
		name: "仮面ライダーフォーゼ",
		form: "ベースステイツ",
	},
	{
		id: 109,
		name: "仮面ライダージオウ",
		form: "フォーゼアーマー",
	},
	{
		id: 110,
		name: "仮面ライダーゴースト",
		form: "ベンケイ魂",
	},
	{
		id: 111,
		name: "仮面ライダービルド",
		form: "ファイヤーヘッジホッグフォーム",
	},
	{
		id: 112,
		name: "仮面ライダービルド",
		form: "フェニックスロボフォーム",
	},
	{
		id: 113,
		name: "仮面ライダーキバ",
		form: "キバフォーム",
	},
	{
		id: 114,
		name: "仮面ライダーダブル",
		form: "ヒートジョーカー",
	},
	{
		id: 115,
		name: "仮面ライダーオーズ",
		form: "サゴーゾコンボ",
	},
	{
		id: 116,
		name: "仮面ライダービルド",
		form: "オクトパスライトフォーム",
	},
	{
		id: 117,
		name: "仮面ライダーブレイド",
		form: "キングフォーム",
	},
	{
		id: 118,
		name: "仮面ライダーゴースト",
		form: "エジソン魂",
	},
	{
		id: 119,
		name: "仮面ライダー鎧武",
		form: "パインアームズ",
	},
	{
		id: 120,
		name: "仮面ライダーフォーゼ",
		form: "マグネットステイツ",
	},
	{
		id: 121,
		name: "仮面ライダーゴースト",
		form: "ベートーベン魂",
	},
	{
		id: 122,
		name: "仮面ライダー電王",
		form: "アックスフォーム",
	},
	{
		id: 123,
		name: "仮面ライダーゴースト",
		form: "ニュートン魂",
	},
	{
		id: 124,
		name: "仮面ライダークウガ",
		form: "グローイングフォーム",
	},
	{
		id: 125,
		name: "仮面ライダークウガ",
		form: "タイタンフォーム",
	},
	{
		id: 126,
		name: "仮面ライダーダブル",
		form: "サイクロントリガー",
	},
	{
		id: 127,
		name: "仮面ライダー鎧武",
		form: "カチドキアームズ",
	},
	{
		id: 128,
		name: "仮面ライダードライブ",
		form: "タイプワイルド",
	},
	{
		id: 129,
		name: "仮面ライダードライブ",
		form: "タイプテクニック",
	},
	{
		id: 130,
		name: "仮面ライダーダブル",
		form: "ルナメタル",
	},
	{
		id: 131,
		name: "仮面ライダーエグゼイド",
		form: "アクションゲーマー レベル１",
	},
	{
		id: 132,
		name: "仮面ライダー龍騎",
		form: "ブランク体",
	},
	{
		id: 133,
		name: "仮面ライダーダブル",
		form: "ヒートトリガー",
	},
	{
		id: 134,
		name: "仮面ライダービルド",
		form: "ゴリラモンドフォーム",
	},
	{
		id: 135,
		name: "仮面ライダーダブル",
		form: "ルナトリガー",
	},
	{
		id: 136,
		name: "仮面ライダービルド",
		form: "ロケットパンダフォーム",
	},
	{
		id: 137,
		name: "仮面ライダー電王",
		form: "ロッドフォーム",
	},
	{
		id: 138,
		name: "仮面ライダーダブル",
		form: "サイクロンメタル",
	},
	{
		id: 139,
		name: "仮面ライダー鎧武",
		form: "スイカアームズ",
	},
	{
		id: 140,
		name: "仮面ライダー電王",
		form: "プラットフォーム",
	},
	{
		id: 141,
		name: "仮面ライダーキバ",
		form: "ドッガフォーム",
	},
	{
		id: 142,
		name: "仮面ライダーダブル",
		form: "ヒートメタル",
	},
	{
		id: 143,
		name: "まずは100秒の壁を越えてみろ・・・!",
		form: "",
	},

];



//画像登録
var ASSETS = {
	// 画像
	image: {
		'kicks': './images/kicks.png',	//ライダーキック画像
		'titles': './images/titles.jpg',	//ライダータイトル画像
		'numbers': './images/numbers.jpg',	//クリアタイム数字画像
		'riders': './images/riders.jpg',	//ライダーランク画像
		'maintitle':'./images/maintitle.jpg',	//メインタイトル
	},
};


//tweenerアニメーションjson定義
var TITLE_ANIMATION = {
	tweens: [
	  ['to',{x: 320,y: 480},100],
	]
};

var RESULT_ANIMATION_1 = {
	tweens: [
	  ['to',{x: 320,y: 230},200],
	]
};

var RESULT_ANIMATION_2 = {
	tweens: [
	  ['to',{x: 320,y: 680},200],
	]
};

var RESULT_ANIMATION_3 = {
	tweens: [
	  ['to',{x: 320,y: 720},200],
	]
};

var RESULT_ANIMATION_NUM = {
	tweens: [
	  ['to',{x: 320,y: 110},150],
	]
};


//グローバル変数宣言
var MAX_NUM = 20;	//平成ライダー20人分
var GAME_CNTDOWN = 0;	//始まる前のカウントダウン中
var GAME_PLAY = 1;	//ゲームプレイ中

var game_flg = GAME_CNTDOWN;


/*************************************************

	 TitleSceneクラス

*************************************************/
phina.define('TitleScene',{
	superClass: 'DisplayScene',

	   init: function(){
		this.superInit();


		//デバッグテキスト関連
		if(  DEBUG_FLG )
		{
			this.debug_group = DisplayElement().addChildTo( this );	//デバッグテキストグループ（ここにデバッグテキストを入れていく）
		}

		this.backgroundColor = '#fefefe';	//背景色
		

		//touch start部分ボタン
		this.button = Button({
				text : 'Touch Start',
				strokeWidth : 0,
				fill: 'transparent',
				fontColor: '#000000',

				}).addChildTo( this ).setPosition( 320,850 );

		var self = this;
		
		this.button.onpointstart = function() {
			//もしtouch startが押されたら
			self.exit();
		};

		//クレジット表記
		this.creditText = Label( '@SHOSASA3' ).addChildTo( this ).setPosition( this.gridX.center()+240,900 ).setScale( 0.5,0.5 );



		//メインタイトル表示
		this.maintitle = Sprite('maintitle',150,130).addChildTo( this );
		this.maintitle.x = this.gridX.center();
		this.maintitle.y = 480;
		this.maintitle.setScale( 2.0,2.0 );

		this.maintitle_flg = 0;
		this.maintitle_angle = 0;


		//真ん中ライダータイトル部分
		this.current_id = 0;

		this.r_titleSprite = Sprite('titles',198,79).addChildTo( this );
		this.r_titleSprite.x = this.gridX.center();
		this.r_titleSprite.y = 480;
		this.r_titleSprite.frameIndex = this.current_id;
		this.r_titleSprite.setScale( 2.0,2.0 );
		this.r_titleSprite.hide();


		//以前のライダータイトル部分
		this.pre_r_titleSprite = Sprite('titles',198,79).addChildTo( this );	//以前のタイトル画像は飛ばす
		this.pre_r_titleSprite.setScale( 2.0,2.0 );
		this.pre_r_titleSprite.hide();


		//キック部分のグループ
		this.kick_group = DisplayElement().addChildTo( this );
		

		var self = this;	//thisを参照しておく

		//キック部分
		Array.range( 0, 360, 18 ).each( function( deg,i ) {	//ライダー20人分のキック

			// 度をラジアンに変換
			var rad = Math.degToRad( deg - 90 );
			var sprite = Sprite('kicks',50,120).addChildTo( self.kick_group );	//kicksスプライトを登録

			// 円周上に配置(0から昇順で並ぶように)
			sprite.x = Math.cos( rad ) * 260;
			sprite.y = Math.sin( rad ) * 260;
			sprite.setScale( 0.8,0.8 );	//大きさ調整
			sprite.setRotation( deg );	//角度調整
			sprite.id = i;
			sprite.frameIndex = sprite.id;

			sprite.setInteractive( true );	//タッチを有効に

			//もしタッチされたら
			sprite.onpointstart = function() {

				var rand = Random.randint( 1, 4 );

				//以前のライダータイトル処理
				if( self.maintitle_flg != 0 )
				{
					self.pre_r_titleSprite.show();	//正解したスプライトを表示

					self.pre_r_titleSprite.rand = rand;	//飛ばす方向を決める

					self.pre_r_titleSprite.x = self.gridX.center();
					self.pre_r_titleSprite.y = 480;

					self.pre_r_titleSprite.alpha = 1;	//不透明に
					self.pre_r_titleSprite.frameIndex = self.current_id;
				}

				//真ん中ライダータイトル画像処理
				self.current_id = sprite.id;	//現在のライダータイトル部分を更新する
				self.r_titleSprite.show();

				if( rand === 1 )
				{
					//右から
					self.r_titleSprite.x = self.gridX.center() + 100;
					self.r_titleSprite.y = self.gridY.center();
				}
				else if( rand === 2 )
				{
					//下から
					self.r_titleSprite.x = self.gridX.center();
					self.r_titleSprite.y = self.gridY.center() + 100;
				}
				else if( rand === 3 )
				{
					self.r_titleSprite.x = self.gridX.center() - 100;
					self.r_titleSprite.y = self.gridY.center();
				}
				else if( rand === 4 )
				{
					self.r_titleSprite.x = self.gridX.center();
					self.r_titleSprite.y = self.gridY.center() - 100;
				}


				self.r_titleSprite.frameIndex = sprite.id;
				self.r_titleSprite.tweener.clear();	//アニメーションをクリアしないと連続でアニメーション出来ない
				self.r_titleSprite.tweener.fromJSON( TITLE_ANIMATION );

				if( self.maintitle_flg === 0 ) 
				{
					self.maintitle_flg = 1;	//1回クリックされたらフラグON
					self.maintitle.remove();
				}

			};

		});

		this.kick_group.setPosition( 320, 480 );
		this.kick_ang = 0;


		//画面をクリックしたら
		this.onpointstart = function( e ){
			var p = e.pointer;
			var wave = Wave().addChildTo(this);
			wave.x = p.x;
			wave.y = p.y;
		};


	},//end init()


	   update: function( app ){
		//デバッグテキスト関連
		if(  DEBUG_FLG )
		{
			this.debug_group.children.clear();	//デバッグテキストをすべてクリア
			var p = app.pointer;

			/*******

			↓ここにデバッグテキストを追加していく↓

			*******/
			var d;
			d = DebugLabel( 'X座標 :'+p.x ).addChildTo( this.debug_group );
			d = DebugLabel( 'Y座標 :'+p.y ).addChildTo( this.debug_group );
			d = DebugLabel( 'flg :'+this.maintitle_flg ).addChildTo( this.debug_group );


			var self = this;
			var x = 100;
			var y = 40;
			this.debug_group.children.each( function( debug ) {
				debug.x = x;
				debug.y = y;
				y += 15;
			});
		}//end debug


		//キックグループ回転
		this.kick_group.setRotation( this.kick_ang );
		this.kick_ang += 0.3;
		

		//メインタイトルを回転する処理
		if( this.maintitle_flg === 0 )
		{
			this.maintitle.setRotation( this.maintitle_angle );
			this.maintitle_angle -= 0.3;
		}
		

		if( this.pre_r_titleSprite.alpha <= 0 )
		{
			this.pre_r_titleSprite.remove();
			this.pre_r_titleSprite = Sprite('titles',198,79).addChildTo( this );
			this.pre_r_titleSprite.setScale( 2.0,2.0 );
			this.pre_r_titleSprite.hide();
		}

		this.pre_r_titleSprite.alpha -= 0.25;
		if( this.pre_r_titleSprite.alpha <= 0 ) this.pre_r_titleSprite.alpha = 0;


		//ライダータイトルを飛ばす処理
		if( this.pre_r_titleSprite.rand === 1 )
		{
			this.pre_r_titleSprite.x -= 30;
		}
		else if( this.pre_r_titleSprite.rand === 2 )
		{
			this.pre_r_titleSprite.y -= 30;
		}
		else if( this.pre_r_titleSprite.rand === 3 )
		{
			this.pre_r_titleSprite.x += 30;
		}
		else if( this.pre_r_titleSprite.rand === 4 )
		{
			this.pre_r_titleSprite.y += 30;
		}

		//this.pre_r_titleSprite.x -= 30;

	
	   },//end update()


});	
//end TitleScene



/**************************************************

	MainSceneクラス

**************************************************/
phina.define('MainScene', {

	superClass: 'DisplayScene',

	  //初期化
	  init: function() {
	  	this.superInit();

		//デバッグテキスト関連
		if(  DEBUG_FLG )
		{
			this.debug_group = DisplayElement().addChildTo( this );	//デバッグテキストグループ（ここにデバッグテキストを入れていく）
		}


		// 背景色を指定
		this.backgroundColor = '#fefefe';

		//フラグ関連初期化
		game_flg = GAME_CNTDOWN;	//カウントダウンから始める


		//始める前のカウントダウン
		this.start_cnt_time = 4000;
		this.start_cnt_timeText = 3;
		this.start_cntLabel = Label( this.start_cnt_timeText ).addChildTo( this );
		this.start_cntLabel.x = this.gridX.center(); // x 座標
		this.start_cntLabel.y = this.gridY.center(); // y 座標
		this.start_cntLabel.fill = 'black'; // 塗りつぶし色
		this.start_cntLabel.alpha = 1.0

		//タイマー関連
		this.time = 0.0;	//ゲームタイマー
		this.timerLabel = Label( this.time ).addChildTo( this );
		this.timerLabel.x = this.gridX.center();
		this.timerLabel.y = this.gridY.center() - 400;
		this.timerLabel.fill = 'black';
		this.timerLabel.hide();


		this.kick_numbers = Array.range( 0, MAX_NUM ).shuffle();	//キック部分をランダムに配置するためのランダム変数
		this.r_title_numbers = Array.range( 0, MAX_NUM ).shuffle();	//真ん中タイトル部分をランダムに表示するための変数

		this.current_id = 0;	//現在どこまでクリアしたか？


		//グループテスト
		this.kick_group = DisplayElement().addChildTo( this );

		this.correctSprite = Sprite('titles',198,79).addChildTo( this );	//正解したライダータイトルを飛ばすための画像
		this.correctSprite.setScale( 2.0,2.0 );
		this.correctSprite.hide();


		var self = this;	//参照が外れるためselfにMainのthisを格納

		//キックスプライト画像をグループに追加
		Array.range( 0, 360, 18 ).each( function( deg,i ) {	//テストで10個表示

			// 度をラジアンに変換
			var rad = Math.degToRad( deg - 90 );
			var sprite = Sprite('kicks',50,120).addChildTo( self.kick_group );

			// 円周上に配置
			sprite.x = Math.cos( rad ) * 260;
			sprite.y = Math.sin( rad ) * 260;
			sprite.setScale( 0.8,0.8 );
			sprite.setRotation( deg );
			sprite.id = self.kick_numbers[i];
			sprite.frameIndex = sprite.id;
			sprite.alpha = 0;
 			sprite.tweener.fadeIn( 3000 ).play();	//3秒でフェードイン


			sprite.setInteractive( true );	//タッチを有効に

			//タッチされたら
			sprite.onpointstart = function() {
				if( game_flg === GAME_PLAY )
				{
					if( self.r_title_numbers[ self.current_id ] === sprite.id )
					{
						var rand = Random.randint( 1, 4 );

						self.correctSprite.show();	//正解したスプライトを表示
						self.correctSprite.x = self.gridX.center();
						self.correctSprite.y = self.gridY.center();
						self.correctSprite.alpha = 1;	//不透明に
						self.correctSprite.rand = rand;
						self.correctSprite.frameIndex = self.r_title_numbers[ self.current_id ];
						
						self.current_id ++;	//正解したら次に進める

						if( rand === 1 )
						{
							//右から
							self.r_titleSprite.x = self.gridX.center() + 100;
							self.r_titleSprite.y = self.gridY.center();
						}
						else if( rand === 2 )
						{
							//下から
							self.r_titleSprite.x = self.gridX.center();
							self.r_titleSprite.y = self.gridY.center() + 100;
						}
						else if( rand === 3 )
						{
							self.r_titleSprite.x = self.gridX.center() - 100;
							self.r_titleSprite.y = self.gridY.center();
						}
						else if( rand === 4 )
						{
							self.r_titleSprite.x = self.gridX.center();
							self.r_titleSprite.y = self.gridY.center() - 100;
						}

						//self.r_titleSprite.x = self.gridX.center() + 100;
						//self.r_titleSprite.y = self.gridY.center();
						self.r_titleSprite.tweener.clear();	//アニメーションをクリアしないと連続でアニメーション出来ない
						self.r_titleSprite.tweener.fromJSON( TITLE_ANIMATION );

					}
					if( self.current_id >= ( MAX_NUM - 3 ) )
					{
						self.timerLabel.hide();	//残り3人になるとタイム表示を消す
					}

					if( self.current_id >= MAX_NUM )	//全部クリアしたら
					//if( self.current_id >= 1 )	//テスト用1回クリアしたら

					{
						self.exit({	//リザルト画面へ
							clear_time : self.time,
						});
					}

				}//end if( game_flg === GAME_PLAY )
			};

		});

		//真ん中ライダータイトル部分
		this.r_titleSprite = Sprite('titles',198,79).addChildTo( this );
		this.r_titleSprite.x = this.gridX.center() + 100;
		this.r_titleSprite.y = this.gridY.center();
		this.r_titleSprite.frameIndex = this.r_title_numbers[ this.current_id ]
		this.r_titleSprite.setScale( 2.0,2.0 );
		this.r_titleSprite.hide();


		// グループの中心を移動
		this.kick_group.setPosition( 320, 480 );


		//画面をクリックしたら
		this.onpointstart = function( e ){
			var p = e.pointer;
			var wave = Wave().addChildTo(this);
			wave.x = p.x;
			wave.y = p.y;
		};


	  }, //end init

	  //更新
	  update: function( app ){

		//デバッグテキスト関連
		if(  DEBUG_FLG )
		{
			this.debug_group.children.clear();	//デバッグテキストをすべてクリア

			/*******

			↓ここにデバッグテキストを追加していく↓

			*******/
			var d;
			d = DebugLabel( 'correctSprite.x :'+this.correctSprite.x ).addChildTo( this.debug_group );
			d = DebugLabel( 'game_flg :'+game_flg ).addChildTo( this.debug_group );
			d = DebugLabel( 'cnt_time :'+this.start_cnt_time ).addChildTo( this.debug_group );
			d = DebugLabel( 'alpha :'+this.start_cntLabel.alpha ).addChildTo( this.debug_group );


			var self = this;
			var x = 100;
			var y = 30;
			this.debug_group.children.each( function( debug ) {
				debug.x = x;
				debug.y = y;
				y += 15;
			});

		}//end debug


		//始まる前のカウントダウン
		if( game_flg === GAME_CNTDOWN )
		{
			//始まる前のカウントダウン処理
			this.start_cnt_time -= app.deltaTime;	//1フレーム経過時間を引いていく

			if( this.start_cnt_timeText != Math.floor( this.start_cnt_time / 1000 ) )
			{
				this.start_cnt_timeText = Math.floor( this.start_cnt_time / 1000 );
				this.start_cntLabel.scaleX = 1.0;
				this.start_cntLabel.scaleY = 1.0;
				this.start_cntLabel.alpha  = 1.0;
			}
			this.start_cntLabel.text = this.start_cnt_timeText;
			
			this.start_cntLabel.scaleX += 0.5;
			this.start_cntLabel.scaleY += 0.5;
			this.start_cntLabel.alpha -= 0.1;
			if( this.start_cntLabel.alpha <= 0 ) this.start_cntLabel.alpha = 0;	//0以下になると上手く透明にならないため


			//キック部分をシャッフル演出処理
			var n =  Array.range( 0, MAX_NUM ).shuffle();
			this.kick_group.children.each( function( kick,i ){
				kick.frameIndex = n[i];
				kick.id = n[i];
			});


			if( this.start_cnt_time <= 1000 )	//カウントダウンが終わったら
			{
				game_flg = GAME_PLAY;
				this.start_cntLabel.remove();
				this.r_titleSprite.show();
				this.r_titleSprite.tweener.fromJSON( TITLE_ANIMATION );
				this.timerLabel.show();
			}

		}
		

		//ゲームスタート
		if( game_flg === GAME_PLAY )
		{
			//タイマー処理
			this.time += app.deltaTime;
			var sec = this.time / 1000;	//秒数に変換
			this.timerLabel.text = sec.toFixed( 1 );
			

			this.r_titleSprite.frameIndex = this.r_title_numbers[ this.current_id ];	//ライダーキック画像を変える

			if( this.correctSprite.alpha <= 0 )
			{
				this.correctSprite.remove();
				this.correctSprite = Sprite('titles',198,79).addChildTo( this );
				this.correctSprite.setScale( 2.0,2.0 );
				this.correctSprite.hide();
			}
			this.correctSprite.alpha -= 0.25;
			if( this.correctSprite.alpha <= 0 ) this.correctSprite.alpha = 0;


			//正解した画像を飛ばす処理
			if( this.correctSprite.rand === 1 )
			{
				this.correctSprite.x -= 30;
			}
			else if( this.correctSprite.rand === 2 )
			{
				this.correctSprite.y -= 30;
			}
			else if( this.correctSprite.rand === 3 )
			{
				this.correctSprite.x += 30;
			}
			else if( this.correctSprite.rand === 4 )
			{
				this.correctSprite.y += 30;
			}

			//this.correctSprite.x -= 30;	//正解した画像を飛ばす処理

		}
		
	  }, //end update

}); 
//end Main Scene



/***********************************************************

	resultSceneクラス

***********************************************************/
phina.define("ResultScene", {

  	superClass: 'DisplayScene',
	init: function( param ) {
    		this.superInit( param );


		this.backgroundColor = '#fefefe';	//背景色
		
		this.flg_cnt = 0;

		//デバッグテキスト関連
		if(  DEBUG_FLG )
		{
			this.debug_group = DisplayElement().addChildTo( this );	//デバッグテキストグループ（ここにデバッグテキストを入れていく）
		}


		//クリア時間
		var sec =  param.clear_time / 1000;
		var clear_time = sec.toFixed( 1 );

		var test = TimeforDrawing( clear_time );
		var time_data = test.getTimedata();	//クリアタイムを1つずつ配列に入れて取得


		var rank = this.determiningRank( clear_time );	//クリアタイムでランクを判定
		this.text_draw_flg = 0;		//テキスト表示を制御するフラグ


		//クリアタイムスプライト描画
		this.clear_num_group = DisplayElement().addChildTo( this );	//クリアタイムグループ

		var len = time_data.length;
		var self = this;
		var plus_x = 0;
		( len ).times( function( i ){

			var s = Sprite('numbers',122,220).addChildTo( self.clear_num_group );	
			var start = ((len * 73) / 2) * -1;
			start += 36.5;	//ちょっと調整する
 
			var x = start;
			s.x = x + plus_x;
			s.y = 0;
			if( isNaN( time_data[i] ) )
			{
				s.frameIndex = 10;
			}
			else
			{
				s.frameIndex = time_data[i];
			}

			s.setScale( 0.6,0.6 );

			plus_x += 73;

		});
		this.clear_num_group.setPosition( this.gridX.center()+300,110 );	//クリアタイム画像をグループでまとめて移動
		//this.clear_num_group.tweener.fromJSON( RESULT_ANIMATION_NUM );		//クリアタイム移動アニメーション
		this.clear_num_group.tweener.to({			//クリアタイムアニメーション
						x: 320, y: 110,
					},180,"swing").play();



		this.label_1 = Label({
				text : "お前のタイムは・・・",
				fill : 'black',
				}).addChildTo( this );
		this.label_1.setPosition( this.gridX.center()+200,230 );
		this.label_1.hide();


		this.label_2 = Label({
				text : clear_text_data[rank].name,
				fill : 'black',
				}).addChildTo( this );
		this.label_2.setPosition( this.gridX.center()+200,700 );
		this.label_2.hide();

		this.label_3 = Label({
				text : clear_text_data[rank].form,
				fill : 'black',
				}).addChildTo( this );
		this.label_3.setPosition( this.gridX.center()+200,735 );
		this.label_3.hide();


		//～級だ！を追加
		if( this.label_3.text === "" )
		{
			if( rank != 143 ) this.label_2.text += " 級だ！";
			
		}
		else
		{
			if( rank != 143 ) this.label_3.text += " 級だ！";
		}


		this.label_2.setPosition( this.gridX.center()+200,680 );
		this.label_3.setPosition( this.gridX.center()+200,720 );



		//ライダーランク画像処理
		this.riderrank = Sprite('riders',105,150).addChildTo( this );
		this.riderrank.x = this.gridX.center();
		this.riderrank.y = 460;
		this.riderrank.frameIndex = rank;
		this.riderrank.setScale( 4.0,4.0 );
		this.riderrank.hide();


		//Restartボタン
		this.button = Button({
				text : 'Restart',
				strokeWidth : 0,
				fill: 'transparent',
				fontColor: '#000000',

				}).addChildTo( this ).setPosition( this.gridX.center()+130,840 );
		this.button.hide();

		var self = this;
		this.button.onpointstart = function() {

			//もしRestartが押されたら
			self.exit();
		};


		/*******
		シェアボタン関連処理
		*******/
		this.t_button = Button({
				text : 'シェアする',
				strokeWidth : 0,
				fill: 'transparent',
				fontColor: '#000000',

				}).addChildTo( this ).setPosition( this.gridX.center()-130,840 );

		this.t_button.hide();


		//shareするデータ
		var params = {
			  hashtags: ["平成ライダー20KicksTouch","indiegame"],	//ハッシュタグ
			  url: phina.global.location && phina.global.location.href,
		};
		
		var share_text = this.label_2.text + this.label_3.text;

		//shareボタン処理
		this.t_button.onclick = function(){

			var text = 'お前のタイムは..{0}秒!{1}'.format( clear_time,share_text );
		        var url = phina.social.Twitter.createURL({
		          text: text,
		          hashtags: params.hashtags,
		          url: params.url,

		        });
		        window.open(url, 'share window', 'width=480, height=320');
		};


	},//end init


	update: function( app ){

		//デバッグテキスト関連
		if(  DEBUG_FLG )
		{
			this.debug_group.children.clear();	//デバッグテキストをすべてクリア
			var p = app.pointer;

			/*******

			↓ここにデバッグテキストを追加していく↓

			*******/
			var d;
			d = DebugLabel( 'X座標 :'+p.x ).addChildTo( this.debug_group );
			d = DebugLabel( 'Y座標 :'+p.y ).addChildTo( this.debug_group );
			d = DebugLabel( '時間 :'+this.flg_cnt ).addChildTo( this.debug_group );


			var self = this;
			var x = 100;
			var y = 30;
			this.debug_group.children.each( function( debug ) {
				debug.x = x;
				debug.y = y;
				y += 15;
			});

		}//end debug


		this.flg_cnt += app.deltaTime;	//リザルトシーンの経過時間を取得


		//経過時間でリザルトを表示する
		if( this.flg_cnt >= 1000 )
		{
			this.text_draw_flg = 1;	//テキスト1部分
		}
		if( this.flg_cnt >= 2000 )
		{
			this.text_draw_flg = 2;	//ライダー画像部分
		}
		if( this.flg_cnt >= 3500 )
		{
			this.text_draw_flg = 3;	//ライダー名前部分
		}
		if( this.flg_cnt >= 4000 )
		{
			this.text_draw_flg = 4;	//ボタン部分
		}


		//"お前のタイムは・・・"処理
		if( this.text_draw_flg === 1 )
		{
			this.label_1.show();
			this.label_1.tweener.fromJSON( RESULT_ANIMATION_1 );
			this.text_draw_flg = 0;
		}

		//ライダー画像を徐々に縮小する
		if( this.text_draw_flg === 2 )
		{
			this.riderrank.show();
			this.riderrank.tweener.scaleTo( 2.0, 500 ).play();
			this.text_draw_flg = 0;
		}

		//ライダーネーム、フォーム
		if( this.text_draw_flg === 3 )
		{
			this.label_2.show();
			this.label_2.tweener.fromJSON( RESULT_ANIMATION_2 )
			this.text_draw_flg = 0;

			this.label_3.show();
			this.label_3.tweener.fromJSON( RESULT_ANIMATION_3 )
			this.text_draw_flg = 0;
		}

		if( this.text_draw_flg === 4 ) 
		{
			this.button.show();
			this.t_button.show();
		}

	},
	

	//クリアタイムで～級かを決定する
	determiningRank: function( time ){

		var t = time;
		var index = 0;
		var checkTime = 10;
		var p_time = 0.6;
		var loop = 0;

		if( t < checkTime ) return index;

		index ++;
		while( loop < 1 ){
			
			if( checkTime <= t && t < ( checkTime + p_time ) )
			{
				if( t < 100 )
				{
					loop = 1;
					return index;
				}

			}
			index ++;
			checkTime += p_time;
			checkTime = Math.round( checkTime * 10 );
			checkTime = checkTime / 10;
			
			if( index >= 137 ) p_time = 1.4;
			if( index >= 143 ) loop = 1;

		}
	
		return index;

	},

}); 
//end ResultScene


/****************************************************

	TimeforDrawing
	クリアタイムをスプライト描画するためのクラス

*****************************************************/
phina.define('TimeforDrawing', {

	//初期化
	init: function( clear_time ){
		this.time = clear_time;
	},

	//タイムデータ取得
	getTimedata: function(){
		var a = Math.floor( this.time );	//小数点以下を切り捨てる

		var p_time = ( this.time*10 ) - ( a*10 );	//小数点以下のタイムを取得
		p_time = Math.floor( p_time );	//一応小数点以下を切り捨て


		var t_len = String( a ).length;	//小数点以上のタイムの桁数を取得

		var time_data = [];
		var b;
		for( var i = 1; i <= t_len-1; i++ ){
			b = a / Math.pow( 10,( t_len -1 ) );
			b = Math.floor( b );	//小数点以下切り捨て

			time_data.push( b );
			
			a = a - ( b * Math.pow( 10,(t_len -1 )) );

			t_len --;
		}
		time_data.push( a );
		time_data.push('.');
		time_data.push( p_time );

		return time_data;
	},

});


/****************************************************

	DebugLabelクラス
	デバッグテキストを描画する

****************************************************/
phina.define('DebugLabel', {

	superClass: 'Label',
	//コンストラクタ
	init: function( text ){
		this.superInit( text );	//親クラス初期化
		this.fill = 'black'; // 塗りつぶし色
		this.fontSize = 14;
	},

});

/*****************************************************

	main処理

*****************************************************/
phina.main( function() {

	//アプリケーション生成
	var app = GameApp({
		startLabel: 'title', // メインシーンから開始する
		assets: ASSETS,	//画像読み込み
		debug:false,	//シーン切り替えデバッグを有効に
	});

	//アプリケーション実行
	app.run();
});


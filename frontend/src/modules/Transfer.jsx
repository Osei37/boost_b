import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Highcharts from 'highcharts'
import HighchartSankey from 'highcharts/modules/sankey'
import HighchartsWheel from 'highcharts/modules/dependency-wheel'
import HighchartsReact from 'highcharts-react-official'

import Header from './Header';
import Footer from './Footer';

HighchartSankey(Highcharts)
HighchartsWheel(Highcharts)

const useStyles = makeStyles({
  form: {
      padding: "2rem",
  },
})

function Transfer() {
  const classes = useStyles();

  const options = {
    title: {
      text: 'B.LEAGUE 移籍状況 (08/27)'
    },
    accessibility: {
      point: {
        valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
      }
    },
    colors: ['#000000', '#FFF100', '#515254', '#D80100', '#8FC320', '#023793', '#33A6B8', '#D2001F', '#4C444D', '#11315A', '#EB5405', '#0B408C', '#323D99', '#C77EB5', '#026EB7', '#0269FF', '#DBC073', '#18519E', '#EFAB00', '#918D40', '#E6001C', '#000D37', '#E6280E', '#FFF33F', '#E70012', '#EA470C', '#8F0038', '#FFF890', '#E40073', '#FED500', '#5AFF19', '#444444', '#F34567'],
    series: [
      {
        keys: ['from', 'to', 'weight', 'name', 'from_detail', 'to_detail'],
        data: [["A東京", "渋谷", 1, "小島 元基", "A東京", "渋谷"], ["A東京", "B2", 1, "菊地 祥平", "A東京", "越谷"], ["B2", "富山", 1, "ファイ サンバ", "熊本", "富山"], ["B2", "北海道", 1, "アレックス・マーフィー", "福島", "北海道"], ["B2", "茨城", 1, "LJ・ピーク", "熊本", "茨城"], ["B2", "京都", 1, "水野 幹太", "福島", "京都"], ["B2", "三遠", 1, "佐々木 隆成", "熊本", "三遠"], ["B3", "茨城", 1, "中村 ジャズ", "横浜EX", "茨城"], ["B3", "宇都宮", 1, "村岸 航", "アイシン", "宇都宮"], ["B3", "北海道", 1, "荒川 颯", "横浜EX", "北海道"], ["B3", "新潟", 1, "冨岡 大地", "金沢", "新潟"], ["FE名古屋", "B2", 1, "川島 聖那", "FE名古屋", "西宮"], ["三河", "三遠", 1, "カイル・コリンズワース", "三河", "三遠"], ["三河", "三遠", 1, "根來 新之助", "三河", "三遠"], ["三河", "退団", 1, "ジョナサン・オクテウス", "三河", "退団"], ["三河", "京都", 1, "ジェロード・ユトフ", "三河", "京都"], ["三遠", "島根", 1, "津山 尚大", "三遠", "島根"], ["三遠", "海外", 1, "エリアス・ハリス", "三遠", "海外"], ["三遠", "海外", 1, "ロバート・カーター", "三遠", "海外"], ["三遠", "B2", 1, "常田 耕平(特別指定)", "三遠", "青森"], ["三遠", "琉球", 1, "松脇 圭志", "三遠", "琉球"], ["三遠", "滋賀", 1, "杉浦 佑成", "三遠", "滋賀"], ["三遠", "渋谷", 1, "津屋 一球", "三遠", "渋谷"], ["三遠", "B2", 1, "マックス・ヒサタケ", "三遠", "青森"], ["京都", "B2", 1, "ジャスティン・ハーパー", "京都", "越谷"], ["京都", "仙台", 1, "加藤 寿一", "京都", "仙台"], ["京都", "B2", 1, "内田 旦人", "京都", "青森"], ["京都", "三遠", 1, "細川 一輝", "京都", "三遠"], ["京都", "B2", 1, "會田 圭佑", "京都", "青森"], ["京都", "解除", 1, "デイヴィッド・サイモン", "京都", "解除"], ["京都", "B2", 1, "永吉 佑也", "京都", "福岡"], ["京都", "退団", 1, "ジェロウム・ティルマン", "京都", "退団"], ["京都", "B3", 1, "秋山 皓太", "京都", "立川"], ["京都", "大阪", 1, "鈴木 達也", "京都", "大阪"], ["仙台", "横浜BC", 1, "デビン・オリバー", "仙台", "横浜BC"], ["仙台", "B2", 1, "神里 和", "仙台", "熊本"], ["仙台", "海外", 1, "ジェロウム・メインセ", "仙台", "海外"], ["仙台", "千葉J", 1, "荒尾 岳", "仙台", "千葉J"], ["信州", "B3", 1, "西山 達哉", "信州", "横浜EX"], ["信州", "B2", 1, "大崎 裕太", "信州", "A千葉"], ["信州", "宇都宮", 1, "ヤン・ジェミン", "信州", "宇都宮"], ["北海道", "新潟", 1, "玉木 祥護", "北海道", "新潟"], ["北海道", "茨城", 1, "山口 颯斗", "北海道", "茨城"], ["北海道", "FE名古屋", 1, "葛原 大智", "北海道", "FE名古屋"], ["北海道", "B2", 1, "ダニエル・ミラー", "北海道", "西宮"], ["千葉J", "横浜BC", 1, "赤穂 雷太", "千葉J", "横浜BC"], ["千葉J", "琉球", 1, "ジョシュ・ダンカン", "千葉J", "琉球"], ["千葉J", "A東京", 1, "藤永 佳昭", "千葉J", "A東京"], ["千葉J", "三遠", 1, "大宮 宏正", "千葉J", "三遠"], ["名古屋D", "滋賀", 1, "狩野 祐介", "名古屋D", "滋賀"], ["名古屋D", "海外", 1, "オヴィ・ソコ", "名古屋D", "海外"], ["名古屋D", "仙台", 1, "小林 遥太", "名古屋D", "仙台"], ["大阪", "茨城", 1, "ジャワラ ジョゼフ", "大阪", "茨城"], ["大阪", "FE名古屋", 1, "中村 浩陸", "大阪", "FE名古屋"], ["大阪", "海外", 1, "ペリー・エリス(佐賀へレンタル)", "大阪", "海外"], ["大阪", "京都", 1, "ザック・モーア", "大阪", "京都"], ["大阪", "京都", 1, "青木 龍史", "大阪", "京都"], ["宇都宮", "B2", 1, "チェイス・フィーラー", "宇都宮", "佐賀"], ["宇都宮", "滋賀", 1, "テーブス 海", "宇都宮", "滋賀"], ["富山", "広島", 1, "上澤 俊喜", "富山", "広島"], ["富山", "宇都宮", 1, "ジュリアン・マブンガ", "富山", "宇都宮"], ["富山", "北海道", 1, "ドワイト・ラモス", "富山", "北海道"], ["富山", "B2", 1, "宇都 直輝", "富山", "奈良"], ["富山", "B2", 1, "阿部 友和", "富山", "福岡"], ["島根", "B2", 1, "小阪 彰久", "島根", "香川"], ["島根", "三遠", 1, "金丸 晃輔", "島根", "三遠"], ["川崎", "B2", 1, "パブロ・アギラール", "川崎", "長崎"], ["広島", "茨城", 1, "トーマス・ケネディ", "広島", "茨城"], ["広島", "仙台", 1, "田中 成也", "広島", "仙台"], ["広島", "B2", 1, "グレゴリー・エチェニケ", "広島", "福島"], ["広島", "仙台", 1, "田中 成也(仙台へレンタル)", "広島", "仙台"], ["広島", "横浜BC", 1, "チャールズ・ジャクソン", "広島", "横浜BC"], ["新", "秋田", 1, "スタントン・キッド", "新", "秋田"], ["新", "信州", 1, "サイモン 拓海", "新", "信州"], ["新", "富山", 1, "コーディ・デンプス", "新", "富山"], ["新", "秋田", 1, "アミダ・ブライマー", "新", "秋田"], ["新", "北海道", 1, "ブロック・モータム", "新", "北海道"], ["新", "広島", 1, "ジャスティン・バルタザール", "新", "広島"], ["新", "仙台", 1, "ネイサン・ブース", "新", "仙台"], ["新", "京都", 1, "チェイク・ディアロ", "新", "京都"], ["新", "仙台", 1, "ラショーン・トーマス", "新", "仙台"], ["新", "名古屋D", 1, "モーリス・ンドゥール", "新", "名古屋D"], ["新", "三遠", 1, "ヤンテ・メイテン", "新", "三遠"], ["新", "三河", 1, "カイル・オクイン", "新", "三河"], ["新", "A東京", 1, "ジャスティン・コブス", "新", "A東京"], ["新", "新潟", 1, "チェべ・アルマ", "新", "新潟"], ["新", "三遠", 1, "アイゼイア・ヒックス", "新", "三遠"], ["新", "滋賀", 1, "エリック・マクリー", "新", "滋賀"], ["新", "川崎", 1, "マイケル・ヤングジュニア", "新", "川崎"], ["新", "京都", 1, "ティージェー・ロール", "新", "京都"], ["新", "千葉J", 1, "ヴィック・ロー", "新", "千葉J"], ["新", "滋賀", 1, "ジェイコブ・ワイリー", "新", "滋賀"], ["新", "滋賀", 1, "イヴァン・ブバ", "新", "滋賀"], ["新", "茨城", 1, "鍵冨 太雅", "新", "茨城"], ["新", "FE名古屋", 1, "ジョナサン・ウィリアムズ", "新", "FE名古屋"], ["新", "群馬", 1, "ケーレブ・ターズースキー", "新", "群馬"], ["新", "新潟", 1, "モサク オルワダミロラ 雄太 ジョセフ", "新", "新潟"], ["新", "広島", 1, "ケリー・ブラックシアー・ジュニア", "新", "広島"], ["新", "秋田", 1, "ケレム・カンター", "新", "秋田"], ["新卒", "三遠", 1, "半澤 凌太", "新卒", "三遠"], ["新卒", "千葉J", 1, "大倉 颯太", "新卒", "千葉J"], ["新卒", "富山", 1, "上田 隼輔", "新卒", "富山"], ["新卒", "北海道", 1, "松下 裕汰", "新卒", "北海道"], ["新卒", "横浜BC", 1, "キング 開", "新卒", "横浜BC"], ["新卒", "富山", 1, "浦野 泰斗", "新卒", "富山"], ["新卒", "横浜BC", 1, "河村 勇輝", "新卒", "横浜BC"], ["新卒", "名古屋D", 1, "坂本 聖芽", "新卒", "名古屋D"], ["新卒", "仙台", 1, "寺澤 大夢", "新卒", "仙台"], ["新卒", "京都", 1, "小室 昂大", "新卒", "京都"], ["新卒", "京都", 1, "小西 聖也", "新卒", "京都"], ["新卒", "琉球", 1, "松本 礼太", "新卒", "琉球"], ["新卒", "群馬", 1, "八村 阿蓮", "新卒", "群馬"], ["新卒", "渋谷", 1, "井上 宗一郎", "新卒", "渋谷"], ["新卒", "滋賀", 1, "星野 京介", "新卒", "滋賀"], ["新卒", "大阪", 1, "井手 拓実(広島からレンタル)", "新卒", "大阪"], ["新卒", "FE名古屋", 1, "宮本 一樹", "新卒", "FE名古屋"], ["新卒", "仙台", 1, "岡田 泰希", "新卒", "仙台"], ["新卒", "広島", 1, "佐土原 遼", "新卒", "広島"], ["新卒", "千葉J", 1, "二上 耀", "新卒", "千葉J"], ["新卒", "富山", 1, "野﨑 由之", "新卒", "富山"], ["新潟", "解除", 1, "星野 曹樹", "新潟", "解除"], ["新潟", "川崎", 1, "納見 悠仁", "新潟", "川崎"], ["新潟", "A東京", 1, "岡本 飛竜", "新潟", "A東京"], ["新潟", "京都", 1, "水野 幹太(福島へレンタル)", "新潟", "京都"], ["新潟", "B2", 1, "コービー・パラス", "新潟", "A千葉"], ["新潟", "B2", 1, "大矢 孝太朗", "新潟", "東京Z"], ["横浜BC", "B2", 1, "古牧 昌也", "横浜BC", "奈良"], ["横浜BC", "B3", 1, "阿部 龍星", "横浜BC", "立川"], ["横浜BC", "信州", 1, "生原 秀将", "横浜BC", "信州"], ["横浜BC", "B2", 1, "レジナルド・ベクトン", "横浜BC", "東京Z"], ["横浜BC", "海外", 1, "レイトン・ハモンズ", "横浜BC", "海外"], ["横浜BC", "三遠", 1, "土屋アリスター時生", "横浜BC", "三遠"], ["海外", "三河", 1, "中村 太地", "海外", "三河"], ["渋谷", "北海道", 1, "高橋 耕陽", "渋谷", "北海道"], ["渋谷", "B2", 1, "ジョシュ・ハレルソン", "渋谷", "福島"], ["滋賀", "京都", 1, "トビンマーカス海舟", "滋賀", "京都"], ["滋賀", "新潟", 1, "澁田 怜音", "滋賀", "新潟"], ["滋賀", "B2", 1, "村上 駿斗(山形へレンタル)", "滋賀", "山形"], ["滋賀", "京都", 1, "小澤 智将", "滋賀", "京都"], ["滋賀", "茨城", 1, "林 翔太郎", "滋賀", "茨城"], ["滋賀", "大阪", 1, "ショーン・オマラ", "滋賀", "大阪"], ["滋賀", "海外", 1, "ノヴァー・ガドソン", "滋賀", "海外"], ["滋賀", "B3", 1, "今川 友哲", "滋賀", "鹿児島"], ["琉球", "群馬", 1, "並里 成", "琉球", "群馬"], ["琉球", "広島", 1, "ドウェイン・エバンス", "琉球", "広島"], ["琉球", "仙台", 1, "小寺ハミルトンゲイリー", "琉球", "仙台"], ["琉球", "仙台", 1, "小寺 ハミルトンゲイリー", "琉球", "仙台"], ["秋田", "B2", 1, "ジョーダン・グリン", "秋田", "福岡"], ["群馬", "宇都宮", 1, "笠井 康平", "群馬", "宇都宮"], ["群馬", "海外", 1, "オンドレイ・バルヴィン", "群馬", "海外"], ["群馬", "新潟", 1, "杉本 天昇", "群馬", "新潟"], ["茨城", "海外", 1, "ハビエル・ゴメス・デ・リアニョ", "茨城", "海外"], ["茨城", "島根", 1, "谷口 大智", "茨城", "島根"]],
        type: 'dependencywheel',
        name: 'Dependency wheel series',
        dataLabels: {
          color: '#333',
          textPath: {
            enabled: true,
            attributes: {
              dy: 5
            }
          },
          distance: 10
        },
        tooltip: {
          pointFormatter: function() {
            return `<span>${this.name}<br> From ${this.from_detail} To ${this.to_detail} </span>`
        },                      valueDecimals: 2
        },
        size: '100%'
      }]
  }

  return (
    <>
      <Header page="Transfer" />
      <div className={classes.form}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <Footer/>
    </>
  )
}

export default Transfer
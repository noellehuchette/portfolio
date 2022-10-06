import React from 'react';
import './style.css';

const Home = (props) => {
  return (
    <div className="home-block">
      <div className="personal-info">
        <div className="headshot-block">
          <img className="headshot" src="/headshot.jpg" alt="Noelle Huchette" />
        </div>
        <div className="bio-block">
          <div className="block-content">
            <div className="block-title">
              <h2>$ bio</h2>
            </div>
            <h3>Noelle Huchette</h3>
            <span>(they/them)</span>
            <p>
              {' '}
              Mechanical engineer turned full stack software developer. Strong
              problem solving skills with a passion for collaboration and a
              growth mindset. Interested in making a positive impact through
              well-crafted technological solutions for issues large and small.
            </p>
          </div>
        </div>
        <div className="skills-block">
          <div className="block-content">
            <div className="block-title">
              <h2>$ skills</h2>
            </div>
            <p>fufughhg</p>
          </div>
        </div>
        {loremIpsum()}
      </div>
    </div>
  );
};

export default Home;

function loremIpsum() {
  return (
    <div>
      <h1>Esse enim quam vellet iniquus iustus poterat inpune.</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin ea non
        neglegemus neque tamen ad finem summi boni referemus, non multum ab
        Erilli levitate aberrabimus. Atque ab his initiis profecti omnium
        virtutum et originem et progressionem persecuti sunt. Et saepe officium
        est sapientis desciscere a vita, cum sit beatissimus, si id oportune
        facere possit, quod est convenienter naturae.{' '}
        <i>Quod quidem iam fit etiam in Academia.</i> Hic, qui utrumque probat,
        ambobus debuit uti, sicut facit re, neque tamen dividit verbis. Duo
        Reges: constructio interrete. Ex ea difficultate illae fallaciloquae, ut
        ait Accius, malitiae natae sunt.{' '}
        <b>At, si voluptas esset bonum, desideraret.</b> Illud non continuo, ut
        aeque incontentae. Haec para/doca illi, nos admirabilia dicamus.{' '}
      </p>

      <ul>
        <li>Rhetorice igitur, inquam, nos mavis quam dialectice disputare?</li>
        <li>
          Quaesita enim virtus est, non quae relinqueret naturam, sed quae
          tueretur.
        </li>
        <li>
          Positum est a nostris in iis esse rebus, quae secundum naturam essent,
          non dolere;
        </li>
        <li>
          Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil
          post mortem ad nos pertinere?
        </li>
        <li>
          Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille
          dicat.
        </li>
      </ul>

      <p>
        Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.
        Audax negotium, dicerem impudens, nisi hoc institutum postea translatum
        ad philosophos nostros esset. Quid affers, cur Thorius, cur Caius
        Postumius, cur omnium horum magister, Orata, non iucundissime vixerit?{' '}
        <b>Si id dicis, vicimus.</b>{' '}
        <a href="http://loripsum.net/" target="_blank" rel="noreferrer">
          Tamen a proposito, inquam, aberramus.
        </a>{' '}
        A quibus propter discendi cupiditatem videmus ultimas terras esse
        peragratas. Ut enim consuetudo loquitur, id solum dicitur honestum, quod
        est populari fama gloriosum. Est, ut dicis, inquam.{' '}
        <b>Vestri haec verecundius, illi fortasse constantius.</b> Itaque a
        sapientia praecipitur se ipsam, si usus sit, sapiens ut relinquat.
        Dolere malum est: in crucem qui agitur, beatus esse non potest. Ego vero
        volo in virtute vim esse quam maximam; Color egregius, integra valitudo,
        summa gratia, vita denique conferta voluptatum omnium varietate.{' '}
      </p>

      <p>
        <b>Quae cum dixisset paulumque institisset, Quid est?</b> Fadio Gallo,
        cuius in testamento scriptum esset se ab eo rogatum ut omnis hereditas
        ad filiam perveniret. Sin te auctoritas commovebat, nobisne omnibus et
        Platoni ipsi nescio quem illum anteponebas? Illa enim, quae sunt a nobis
        bona corporis numerata, complent ea quidem beatissimam vitam, sed ita,
        ut sine illis possit beata vita existere. Maximeque eos videre possumus
        res gestas audire et legere velle, qui a spe gerendi absunt confecti
        senectute. Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte
        isto modo dicerentur. Quaesita enim virtus est, non quae relinqueret
        naturam, sed quae tueretur. Itaque primos congressus copulationesque et
        consuetudinum instituendarum voluntates fieri propter voluptatem;{' '}
      </p>

      <ol>
        <li>
          His similes sunt omnes, qui virtuti student levantur vitiis, levantur
          erroribus, nisi forte censes Ti.
        </li>
        <li>
          Sin ea non neglegemus neque tamen ad finem summi boni referemus, non
          multum ab Erilli levitate aberrabimus.
        </li>
        <li>
          In qua si nihil est praeter rationem, sit in una virtute finis
          bonorum;
        </li>
        <li>
          At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis,
          inquit;
        </li>
      </ol>

      <h2>Neque solum ea communia, verum etiam paria esse dixerunt.</h2>

      <p>
        Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem
        requiris? Qui potest igitur habitare in beata vita summi mali metus?
        Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod
        sequantur, quasi curta sententia; Deinceps videndum est, quoniam satis
        apertum est sibi quemque natura esse carum, quae sit hominis natura. Hoc
        tu nunc in illo probas. Quid, cum fictas fabulas, e quibus utilitas
        nulla elici potest, cum voluptate legimus? Sed in ceteris artibus cum
        dicitur artificiose, posterum quodam modo et consequens putandum est,
        quod illi §pigennhmatikÒn appellant; Sed tu istuc dixti bene Latine,
        parum plane. Nihilne est in his rebus, quod dignum libero aut indignum
        esse ducamus? Tertium autem omnibus aut maximis rebus iis, quae secundum
        naturam sint, fruentem vivere. Haec et tu ita posuisti, et verba vestra
        sunt. Bene facis, inquit, quod me adiuvas, et istis quidem, quae modo
        dixisti, utar potius Latinis, in ceteris subvenies, si me haerentem
        videbis.{' '}
      </p>

      <p>
        Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil
        quieti videre, nihil tranquilli potest. Qui cum praetor quaestionem
        inter sicarios exercuisset, ita aperte cepit pecunias ob rem iudicandam,
        ut anno proximo P. Illa sunt similia: hebes acies est cuipiam oculorum,
        corpore alius senescit; Quae tamen a te agetur non melior, quam illae
        sunt, quas interdum optines. Atque haec ita iustitiae propria sunt, ut
        sint virtutum reliquarum communia. Gracchum patrem non beatiorem fuisse
        quam fillum, cum alter stabilire rem publicam studuerit, alter evertere.{' '}
        <b>Verum hoc idem saepe faciamus.</b> Erillus autem ad scientiam omnia
        revocans unum quoddam bonum vidit, sed nec optimum nec quo vita
        gubernari possit.{' '}
      </p>
    </div>
  );
}

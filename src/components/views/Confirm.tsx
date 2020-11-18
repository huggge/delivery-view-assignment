import React, { useState, useEffect } from "react";

import PrevNext from "../PrevNext";

import buttonState from "../../buttonState";

const prevPage = "/delivery";
const nextPage = "/confirm";
const active = "ui big button";
const disabled = "ui big disabled button";

interface Props {
    setButtonMenu: (obj: { start: string; storage: string; items: string; delivery: string; confirm: string }) => void;
    printDetails: () => void;
}

const Confirm: React.FC<Props> = ({ setButtonMenu, printDetails}) => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        setButtonMenu({
            ...buttonState,
            confirm: "ui large button",
        });
    }, [setButtonMenu]);

    const verify = () => {
        setVerified(true)
    }

    return (
        <div className="outercontainer">
            <div className="subheader">
                <div className="headerimg">
                    <img src="img/car.svg" alt="Moving truck" className="img" />
                </div>
                <h1>Bekräfta</h1>
            </div>
            <div className="confirmcontainer">
                <br />
                <h2>
                    Läs igenom avtalet och Bekräfta din beställning.
                    <br /> Du behöver bankID för att använda denna tjänst.
                </h2>
                <h1>Fullmakt</h1>
                <div className="agreement">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum accumsan urna eu
                        feugiat. In dapibus a nisl quis elementum. Aenean semper maximus ligula, eget consequat libero
                        rutrum sed. Proin suscipit ex vel enim laoreet, eget egestas est elementum. Nam nec nulla
                        finibus, scelerisque nunc ut, pharetra erat. Nullam eu hendrerit est. Etiam at turpis aliquam
                        erat convallis ullamcorper eget a urna. Nulla facilisi. Cras eu diam et ligula blandit posuere.
                        Mauris gravida quam eget tempus iaculis. Praesent eget ex sit amet eros imperdiet fringilla.
                        Integer egestas varius consectetur. Nunc rutrum ultrices euismod. Sed ac leo enim. Phasellus
                        convallis enim ut arcu gravida, et interdum felis cursus. Fusce consectetur, purus vehicula
                        iaculis efficitur, felis ante pretium urna, eget scelerisque nulla mauris vitae ipsum. Nullam
                        vehicula arcu a molestie euismod. Nunc in lorem ipsum. Fusce rhoncus scelerisque arcu sed
                        finibus. Sed maximus erat sit amet tellus malesuada viverra. Etiam sem velit, pharetra tristique
                        ultrices at, vestibulum facilisis risus. Nam posuere nibh vel nunc ornare, sit amet condimentum
                        erat faucibus. Sed dolor velit, faucibus non libero at, tristique euismod neque. Ut blandit,
                        velit vel vestibulum dignissim, dolor nisl porttitor nulla, vitae sollicitudin dolor leo eu
                        nunc. Mauris rutrum, ante eget lacinia posuere, urna ipsum porttitor lacus, sed ullamcorper
                        velit leo nec velit. Fusce id ligula at mi dignissim placerat ut eu nunc. Aliquam accumsan
                        auctor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nulla
                        suscipit, consequat ipsum vitae, venenatis risus. Nulla mi dui, vestibulum ac purus ac,
                        consectetur porttitor turpis. Morbi consectetur lectus massa, sit amet rhoncus nulla rhoncus
                        non. Nulla facilisis dictum leo, in luctus metus mattis vestibulum. Nam egestas, justo nec
                        commodo pellentesque, elit massa tempor quam, nec rhoncus enim turpis et neque. In hac habitasse
                        platea dictumst. Donec vel nibh tempus elit ullamcorper egestas ac nec lectus. Etiam at
                        tincidunt mi. Etiam efficitur quam a dictum bibendum. Sed sit amet metus suscipit, lacinia leo
                        eu, porta nisi. Mauris justo leo, pretium quis felis ut, faucibus tempus enim. Curabitur
                        vestibulum porta lectus, quis interdum erat vehicula at. Nulla nunc nunc, sodales vitae blandit
                        nec, varius vel magna. Suspendisse ac fermentum dui. Duis condimentum ac arcu vitae sagittis.
                        Duis et pellentesque velit. Aenean molestie, orci a sagittis auctor, nibh tortor convallis diam,
                        a viverra lorem sem eget purus. Pellentesque ac dignissim odio, vel mollis risus. Donec eros
                        diam, placerat nec ligula at, lacinia euismod purus. Aenean aliquam magna eget velit eleifend
                        gravida. Praesent efficitur ultrices eros, sed interdum nisi. Nulla facilisi. Phasellus euismod
                        enim non nisl viverra maximus. Integer sollicitudin efficitur feugiat. Nam non enim enim. Ut
                        malesuada varius nisi sit amet pulvinar. Aliquam dictum vel tellus ut malesuada. Suspendisse
                        viverra faucibus metus eleifend sagittis. Vivamus aliquet massa in arcu hendrerit, nec pulvinar
                        enim consectetur. Vestibulum nibh arcu, gravida vestibulum laoreet ut, sagittis a lorem. Sed
                        dictum ornare magna ut finibus. Suspendisse placerat neque eget urna molestie consectetur.
                        Vivamus tincidunt laoreet nulla quis scelerisque. Donec ultricies laoreet arcu ac sodales. Nam
                        nec nibh eleifend, feugiat dui quis, ultricies lectus. Ut accumsan massa vel aliquam tincidunt.
                        Ut ullamcorper, arcu et laoreet porttitor, augue dui mattis urna, sed porta justo massa sed est.
                        Pellentesque interdum arcu augue, quis dignissim sem egestas a. Pellentesque rhoncus at enim et
                        fringilla. Suspendisse quis lorem pharetra, gravida lectus eu, tempor eros. Phasellus varius
                        volutpat ante nec pharetra. Aliquam porta urna quis orci interdum commodo. Proin laoreet
                        ullamcorper turpis, at gravida tortor dapibus at. Morbi quis tincidunt tortor. Nulla facilisi.
                        Integer in lectus ac risus hendrerit consectetur. Aenean congue vel mauris nec volutpat. Donec
                        efficitur accumsan ultrices. Morbi vel diam elit. Donec ipsum nibh, posuere nec mauris lacinia,
                        porta rhoncus ipsum. Cras nibh magna, pharetra eu luctus eu, dignissim eget urna. Quisque
                        tristique nulla erat, et rhoncus lectus elementum a. Aliquam sed ipsum justo. Donec tempus enim
                        ac sodales interdum. Integer quis tortor rutrum dolor molestie finibus. In bibendum sem ut
                        pretium molestie. Pellentesque in sem et velit mollis lobortis eget eu enim. Quisque luctus odio
                        sem, quis scelerisque justo sodales eget. Phasellus pellentesque finibus dapibus. Aliquam sed
                        dolor eget lorem vulputate mollis. Mauris sed libero leo. In posuere mauris ac consequat
                        feugiat. Cras suscipit neque vitae sem pulvinar placerat. Mauris iaculis nec leo sed posuere.
                        Maecenas nisi est, ultrices in augue eget, hendrerit dignissim felis. Maecenas sapien tortor,
                        elementum nec maximus et, varius mattis orci. Curabitur a turpis congue, suscipit risus vel,
                        mollis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et imperdiet leo,
                        sed sodales libero. Nulla blandit mi nec blandit laoreet. Curabitur eget finibus lorem, et
                        accumsan augue. Aenean ac augue nulla. Aliquam erat volutpat. Vestibulum vel quam vehicula,
                        aliquet eros id, vulputate risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Etiam justo leo, lobortis in massa at, porta suscipit nunc. Pellentesque mi lorem, mollis id
                        odio sit amet, tempor sagittis ex. Sed ut elementum nisi. Phasellus commodo mi nisl, pharetra
                        semper nulla mollis at. Sed pulvinar, ipsum sit amet vehicula mattis, nisl massa pellentesque
                        tortor, a semper eros odio non nisi. Nulla aliquet varius magna, sed pulvinar nisl maximus in.
                        Nunc aliquet felis fringilla erat ornare, eget porttitor mauris porta. Vivamus pretium lorem
                        ipsum, ut suscipit quam congue a. Nunc ac ipsum at arcu finibus sodales vel pellentesque nunc.
                        Etiam pretium tincidunt mi, vitae sodales dui elementum quis. Aliquam in mollis massa. Nulla a
                        magna aliquam, semper lacus et, mattis diam. Aliquam nec aliquam diam. Aliquam porttitor libero
                        sit amet interdum consequat. Ut ac eleifend turpis, eget ullamcorper dolor. Phasellus lacinia
                        congue elementum. Sed suscipit, risus non faucibus aliquam, neque lacus elementum justo, eget
                        mollis lectus nisl vitae augue. Integer eu risus condimentum, commodo purus et, gravida turpis.
                        Sed tellus nisi, ullamcorper a dui in, rutrum euismod mauris. Donec tempus mi quis dui congue
                        vehicula at eget metus. Nulla faucibus gravida lectus, ut condimentum massa tempor id. Morbi sit
                        amet quam faucibus, placerat ex tempor, porttitor nibh. Suspendisse malesuada a sem quis
                        eleifend. Ut vehicula pretium cursus. Curabitur dictum libero quis sem lobortis, vel gravida
                        lorem sagittis. Nullam lorem felis, scelerisque sit amet egestas id, tincidunt in ligula.
                        Vivamus ultrices mauris vel mauris ultricies blandit. Sed tristique, neque sed commodo mattis,
                        nisl enim malesuada nisi, a efficitur nibh eros ac ex. Nullam sodales blandit sapien non
                        sagittis. Aenean consequat quis nisl a eleifend. Maecenas iaculis metus lacinia ex finibus, nec
                        sodales sem mattis. Fusce et ligula sit amet metus molestie malesuada. Donec ut ullamcorper
                        nisl, vel tristique diam. Cras commodo eleifend semper. Pellentesque eleifend sapien vitae
                        sapien rutrum, sit amet fermentum risus pulvinar. Etiam porttitor purus sapien, quis iaculis
                        quam porta sed. Curabitur pretium tincidunt nunc, sed porta quam rhoncus eget. Ut ullamcorper a
                        libero quis consectetur. Mauris feugiat tortor sed scelerisque tempor. Vestibulum dignissim non
                        velit vel efficitur. Cras vel vulputate velit. Vivamus volutpat dapibus nulla vel mollis. Sed a
                        lobortis lectus. Mauris nec orci a libero commodo fringilla vitae et turpis. Mauris sit amet
                        vulputate dui. Praesent euismod hendrerit neque sodales placerat. Pellentesque vehicula at erat
                        sed commodo. Vestibulum fringilla semper tellus ut blandit. Mauris arcu ex, cursus at nisl in,
                        condimentum blandit odio. Pellentesque est odio, efficitur vitae scelerisque a, rutrum ac
                        tortor. Curabitur tincidunt facilisis eros eu convallis. Donec id faucibus tortor. Vivamus
                        aliquam massa sed eros ullamcorper accumsan nec et purus. Ut justo magna, iaculis porttitor
                        magna sed, tempus vehicula ante. Donec at aliquam libero, non vestibulum nisi. In laoreet
                        molestie augue, sed varius enim ultrices sed. Sed commodo egestas lacus eget tristique. Sed
                        venenatis est nec velit ornare ullamcorper. Duis vestibulum ornare ullamcorper. Morbi
                        condimentum dapibus eleifend. Etiam feugiat nunc at elit vestibulum, eget tincidunt est
                        sollicitudin. Mauris sollicitudin odio lectus, quis varius justo volutpat eu. Duis convallis dui
                        a libero sodales, ac pharetra lectus aliquam. Sed aliquam dolor ullamcorper tristique facilisis.
                        Maecenas tincidunt efficitur nibh. Praesent nec molestie justo. Duis feugiat lacinia aliquam.
                        Quisque leo lorem, luctus eu egestas lacinia, aliquet vitae nibh. Vivamus orci urna, convallis
                        non magna et, bibendum elementum est. In tincidunt posuere suscipit. Pellentesque vel risus
                        accumsan, ultricies mauris dictum, rhoncus arcu. Duis id viverra leo. Vivamus dui lorem,
                        porttitor id elit nec, mollis laoreet velit. Pellentesque maximus accumsan turpis, et volutpat
                        lacus bibendum sed. Morbi massa neque, pulvinar sit amet facilisis non, interdum nec tortor.
                        Aliquam ut auctor dui. Phasellus viverra nibh consequat congue pulvinar. In hac habitasse platea
                        dictumst. Nullam ac tellus lacinia neque ultricies facilisis. Duis quis mauris id magna auctor
                        congue. Vestibulum id efficitur ante. Sed facilisis efficitur velit. Aliquam gravida cursus
                        arcu, sit amet iaculis erat lacinia eget. Pellentesque molestie ex in turpis condimentum congue.
                        Cras tempor accumsan augue, ac tristique eros suscipit ut. Nunc in dui sit amet velit porta
                        accumsan at nec est. Morbi dolor justo, aliquet ac interdum non, ultrices et purus. Donec et
                        facilisis orci. Integer metus sapien, pellentesque vitae imperdiet vitae, fringilla vel lectus.
                        Integer et lacus elit. Phasellus et lacus eget nulla malesuada tincidunt. Integer accumsan nisi
                        vitae tellus fermentum, eget eleifend sem mattis. Curabitur condimentum velit eros, et porta
                        neque maximus sed. Nunc ut nunc feugiat dolor suscipit cursus. Aliquam varius venenatis erat,
                        vitae semper tellus lobortis id. Maecenas ac auctor ipsum, eu volutpat mauris. Aliquam volutpat
                        mollis lorem, varius sollicitudin risus sollicitudin sit amet. Sed accumsan urna sit amet felis
                        posuere viverra. Vivamus sit amet accumsan risus, a cursus nibh. Suspendisse tempor lobortis
                        nisl, ac sodales velit egestas a. Maecenas ornare felis ut leo euismod iaculis. In hac habitasse
                        platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Curabitur imperdiet urna augue, quis tristique arcu faucibus vel. Praesent nulla
                        ante, hendrerit a porttitor id, dictum sed quam. Nunc luctus arcu justo, at maximus nunc
                        imperdiet interdum. Aliquam tincidunt lacinia mauris quis scelerisque. Vivamus ac eleifend
                        lacus, eget mollis tellus. Donec velit nisl, mollis eu suscipit nec, mollis a velit. Donec in
                        dui accumsan, eleifend velit pellentesque, condimentum metus. In ac convallis diam. Sed faucibus
                        auctor leo eu vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Ut eu dui nec leo semper semper. Integer sit amet laoreet lacus.
                        Curabitur egestas, felis a faucibus rhoncus, diam lectus facilisis ligula, ut fermentum massa
                        lectus eu dui. Donec eget rutrum nibh. Fusce porttitor ex eget neque varius fringilla. Nunc
                        mollis tempor metus, eu lacinia odio auctor sed. Aliquam magna mi, feugiat ac velit a, tincidunt
                        viverra erat. Pellentesque et ultricies nulla. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Quisque sit amet sollicitudin orci, sed molestie
                        ligula. Etiam cursus tortor vel orci dapibus commodo. Nam a mattis ante. Fusce porta ante
                        lectus, at bibendum arcu laoreet id. Duis neque sapien, tempor ac dolor in, blandit tincidunt
                        nibh. Donec in eleifend neque. Nunc et diam bibendum, ullamcorper mi sit amet, commodo augue.
                        Phasellus nec lorem pharetra mi dapibus venenatis et quis dui. Nullam hendrerit, turpis id
                        rhoncus sollicitudin, enim ex ullamcorper felis, eget mollis nulla risus eu sapien. Donec id
                        neque dictum, elementum turpis a, vehicula velit. Morbi mollis massa vitae convallis facilisis.
                        Ut pellentesque lectus ac pharetra sodales. Integer ut arcu eros. Praesent sit amet justo
                        placerat leo pellentesque tincidunt tincidunt sit amet risus. Phasellus maximus, quam a rutrum
                        rutrum, elit tellus mattis nunc, et semper justo lectus ac nulla. Donec convallis gravida
                        accumsan. Sed congue egestas purus quis egestas. Maecenas eget ornare velit, ac suscipit nulla.
                        Proin erat arcu, dignissim quis finibus ac, auctor tincidunt metus. Pellentesque in neque est.
                        Maecenas pretium porttitor velit sed varius. Integer posuere consectetur dolor, quis gravida
                        odio iaculis eu. Nam tempor ante sed massa condimentum, a pulvinar eros semper. Phasellus
                        lacinia neque malesuada elit rhoncus, nec pulvinar sem malesuada. Proin finibus ex a sem iaculis
                        venenatis. Proin pharetra, libero ut sagittis tempus, arcu sapien maximus ligula, vitae mattis
                        lorem nisl eu diam. Nulla pharetra ex eu nisi lacinia consectetur. Cras tempus elit nec elit
                        venenatis luctus. Phasellus quis ornare eros, at sollicitudin urna. Sed laoreet ornare augue in
                        commodo. Vestibulum vestibulum venenatis convallis. Proin sit amet risus dui. Cras cursus purus
                        velit. Donec mollis erat ac nunc porta efficitur. Aliquam at consequat nibh. Sed hendrerit velit
                        eget rutrum tempus. Nam at ipsum fringilla, sodales ex vel, viverra lorem. Integer aliquam risus
                        at sollicitudin hendrerit. Sed dapibus eros sed velit posuere hendrerit. Duis eros est, laoreet
                        vitae massa eu, convallis fermentum urna. Donec accumsan nibh sit amet nibh aliquet, in bibendum
                        nulla pellentesque. Nulla facilisi. Quisque eget ipsum quam. Sed laoreet sem sit amet libero
                        pulvinar, eu dapibus elit malesuada. Nulla facilisi. Curabitur maximus imperdiet erat, vel
                        cursus nulla lacinia vitae. Sed molestie odio vitae felis porta, et congue turpis commodo. Nulla
                        facilisi. Fusce blandit sem a erat faucibus auctor. Aenean mollis, lorem aliquet tristique
                        feugiat, lacus est hendrerit metus, id finibus risus mauris ac turpis. Aenean non mollis nisl.
                        Fusce a nunc a felis aliquet tempus. Vivamus hendrerit tortor a vestibulum volutpat. Nunc
                        posuere nibh urna, sed dapibus augue pulvinar eget. Vivamus tempus laoreet nunc efficitur
                        interdum. Donec mi nulla, blandit nec dui at, rhoncus cursus quam. Aliquam vehicula facilisis
                        quam at ultricies. Mauris ligula nulla, sodales in efficitur eleifend, tincidunt eu metus. In
                        faucibus interdum velit quis euismod.
                    </p>
                </div>
                <div className="bankidcontainer">
                    <img src="img/bankid-vector-logo.svg" alt="BankID" className="bankimg" />

                    <button onClick={() => verify()} className="ui large button">Öppna BankID</button>
                </div>
                <hr />
            </div>
            <PrevNext prevPage={prevPage} nextPage={nextPage} prevClass={active} nextClass={disabled} />
            <div className="confirm">
                <button onClick={() => printDetails()} className={verified ? "ui button massive green" : "ui button disabled massive "}>Bekräfta leveransen</button>
            </div>
        </div>
    );
}

export default Confirm;

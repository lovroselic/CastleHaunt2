<div id="preload" class="hidden"></div>

<div class="container my-5 p-5 cool_page">
    <div id="setup">
        <div id="load"></div>
        <div class="row win">
            <h1 id="title" class="arcade"></h1>
            <p class="c64">Editor used for R.U.N., CrawlMaster II, The Curse of the Castle Creep, and maybe some
                other games.</p>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="setup_container section" id="selector">
                    <fieldset>
                        <legend>
                            Size & Info:
                        </legend>
                        Grid dimensions:
                        <input name="gridsize" id="horizontalGrid" type="text" size="2" maxlength="2" value="16">
                        <span> X </span>
                        <input name="gridsize" id="verticalGrid" type="text" size="2" maxlength="2" value="16">
                        <br />
                        Grid size (px):
                        <input name="gridsize" id="gridsize" type="text" size="2" maxlength="2" value="64">
                        <br />
                        RoomID:
                        <input name="roomid" id="roomid" type="text" size="16" maxlength="16" value="1">
                        <br />
                        Room name:
                        <input name="roomname" id="roomname" type="text" size="32" maxlength="64"
                            value="Generic room name">
                        <br />
                        Arena border width:
                        <input name="arenawidth" id="arenawidth" type="number" min="1" max="7" value="2">
                        <br /> WIDTH (px) = <span id="ENGINEgameWIDTH"></span> / <span id="spacex"></span>
                        <br />
                        HEIGHT (px) =
                        <span id="ENGINEgameHEIGHT"></span> / <span id="spacey"></span><br />

                        <label for="checkpoint">SaveGame
                            checkpoint</label>

                        <select name="checkpoint" id="checkpoint">
                            <option value="0">Neutral</option>
                            <option value="1">Block</option>
                            <option value="2">Restore</option>
                        </select>

                    </fieldset>
                    <fieldset>
                        <legend>
                            Renderer:
                        </legend>
                        <input type="radio" name="renderer" value="line"> Line <br />
                        <input type="radio" name="renderer" value="block" checked="checked"> Block (decal, item
                        support)<br />
                        <input type="radio" name="renderer" value="texture"> Texture <br />
                        <input type="radio" name="renderer" value="tile"> Tile <br />
                        <input type="checkbox" id="corr" value="corr" name="corr"> Draw corridor gridline<br />
                        <input type="checkbox" id="grid" value="grid" name="grid" checked="checked"> Main grid<br />
                        <input type="checkbox" id="coord" value="coord" name="coord">
                        Coordinates<br />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Material
                        </legend>
                        <div class="d-flex justify-content-center">
                            <select id="materialtype"> </select>
                        </div>
                        <div id="material-details"></div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Light type
                        </legend>
                        <div class="d-flex justify-content-center">
                            <select id="lighttype"> </select>
                        </div>
                        <div id="light-details"></div>
                        <div id="light-code"></div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Connections
                        </legend>
                        Source GateID: <input name="sgateID" id="sgateID" type="text" size="16" maxlength="16"
                            value="1.1"><br />
                        Target GateID: <input name="tgateID" id="tgateID" type="text" size="16" maxlength="16"
                            value="2.1"><br />
                        <div class="d-flex justify-content-center">
                            <select id="gatetype"> </select>
                        </div>
                        <div>
                            <canvas id="gatecanvas" width="256" height="256"></canvas>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Directions
                        </legend>
                        <input type="radio" name="directions" value="UP"> UP <br />
                        <input type="radio" name="directions" value="DOWN"> DOWN <br />
                        <input type="radio" name="directions" value="LEFT"> LEFT <br />
                        <input type="radio" name="directions" value="RIGHT"> RIGHT <br />
                        <input type="radio" name="directions" value="NOWAY" checked="checked"> NOWAY <br />
                    </fieldset>
                    <fieldset>
                        <legend>Shrines</legend>
                        <div class="d-flex justify-content-center">
                            <select id="shrine_type"> </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Trainers</legend>
                        <div class="d-flex justify-content-center">
                            <select id="item_shrine_type"> </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Oracles</legend>
                        <div class="d-flex justify-content-center">
                            <select id="oracle_type"> </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Interaction objects</legend>
                        <div class="d-flex justify-content-center">
                            <select id="interaction_object_type"> </select>
                        </div>
                        <div class="d-flex justify-content-center">
                            <canvas id="object_canvas" width="48" height="48"></canvas>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Movable interaction entity</legend>
                        <div class="d-flex justify-content-center">
                            <select id="movable_type"> </select>
                        </div>
                        <div class="d-flex justify-content-center">
                            <canvas id="movable_canvas" width="48" height="48"></canvas>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Interactors</legend>
                        <div class="d-flex justify-content-center">
                            <select id="interactor_type"> </select>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="col-4">
                <div class="setup_container section" id="paint">
                    <fieldset>
                        <legend>
                            On click, paint/set:
                        </legend>
                        <input type="radio" name="painter" value="flip" checked="checked"> Flip (Wall
                        &lt-&gt Space)<br />
                        <input type="radio" name="painter" value="wall"> Wall <br />
                        <input type="radio" name="painter" value="space"> Space <br />
                        <input type="radio" name="painter" value="door"> Door <br />
                        <input type="radio" name="painter" value="trapdoor" disabled> TrapDoor (CCC
                        disabled)<br />
                        <input type="radio" name="painter" value="blockwall"> BlockWall<br />
                        <input type="radio" name="painter" value="hole"> Hole <br />
                        <hr>
                        <input type="radio" name="painter" value="gate"> Gate <br />
                        <input type="radio" name="painter" value="decal"> Decal <br />
                        <input type="radio" name="painter" value="light"> Light <br />
                        <input type="radio" name="painter" value="shrine"> Shrine <br />
                        <input type="radio" name="painter" value="item_shrine"> Trainer <br />
                        <input type="radio" name="painter" value="oracle"> Oracle <br />
                        <hr>
                        <input type="radio" name="painter" value="key"> Key <br />
                        <input type="radio" name="painter" value="scroll"> Scroll <br />
                        <input type="radio" name="painter" value="potion"> Potion <br />
                        <input type="radio" name="painter" value="gold"> Gold <br />
                        <input type="radio" name="painter" value="skill"> Skill <br />
                        <hr>
                        <input type="radio" name="painter" value="container"> Container <br />
                        <hr>
                        <input type="radio" name="painter" value="monster"> Monster <br />
                        <hr>
                        <input type="radio" name="painter" value="start"> Start position <br />
                        <hr>
                        <input type="radio" name="painter" value="cleargrid"> Clear grid <br />
                        <hr>
                        <input type="radio" name="painter" value="trigger"> Trigger <br />
                        <div class="d-flex justify-content-center">
                            <select id="trigger_actions"> </select>
                        </div>
                        <hr>
                        <input type="radio" name="painter" value="trap"> Trap <br />
                        <div>
                            <p></p>What: <select id="trap_type"> </select></p>
                        </div>
                        <div>
                            <p></p>Which: <select id="trap_entity"> </select></p>
                        </div>

                        <hr>
                        <input type="radio" name="painter" value="entity"> Entity <br />
                        <hr>
                        <input type="radio" name="painter" value="object"> Interaction object <br />
                        <input type="radio" name="painter" value="movable"> Movable Interaction entity <br />
                        <input type="radio" name="painter" value="interactor"> Interactor <br />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Version:
                        </legend>
                        ENGINE: <span id="engine_version"></span><br>
                        GRID: <span id="grid_version"></span><br>
                        MAZE: <span id="maze_version"></span><br>
                        Prototype LIB: <span id="lib_version"></span><br>
                        IAM: <span id="iam_version"></span><br>
                        WebGL: <span id="webgl_version"></span><br>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Lights
                        </legend>
                        <div>
                            <input type="button" id="randlight" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="light_decal"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="lightcanvas" width="256" height="256"></canvas>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Keys
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center rounded-1 border border-1 border-primary"
                                id="key_selection">
                                <select id="key_type"> </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Monsters
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center">
                                <select id="monster_type"> </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Entities
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center">
                                <select id="entity_type"> </select>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="col-4">
                <div class="setup_container section" id="selector2">
                    <fieldset>
                        <legend>Wall Pictures
                        </legend>
                        <div>
                            <input type="radio" name="decalusage" value="picture" checked="checked"> Use pictures
                            <input type="button" id="randpic" value="Random" />
                            <br />
                            <div class="d-flex justify-content-center">
                                <select id="picture_decal"> </select>
                            </div>
                            <div class="d-flex justify-content-center m-3">
                                <canvas id="picturecanvas" width="256" height="256"></canvas>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Crests
                        </legend>
                        <div>
                            <input type="radio" name="decalusage" value="crest"> Use crests
                            <input type="button" id="randcrest" value="Random" />
                            <br />
                            <div class="d-flex justify-content-center m-3">
                                <select id="crest_decal"> </select>
                            </div>
                            <div class="d-flex justify-content-center">
                                <canvas id="crestcanvas" width="256" height="256"></canvas>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Textures
                        </legend>
                        <div>
                            <input type="radio" name="decalusage" value="texture"> Use texture

                            <br />
                            <div class="d-flex justify-content-center">
                                <select id="texture_decal"> </select>
                            </div>
                            <div class="d-flex justify-content-center m-3">
                                <canvas id="texturecanvas" width="256" height="256"></canvas>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Trigger & trap decals
                        </legend>
                        <input type="button" id="randtriggerdecal" value="Random" />
                        <br />
                        <div class="d-flex justify-content-center">
                            <select id="trigger_decal"> </select>
                        </div>
                        <div class="d-flex justify-content-center">
                            <canvas id="triggercanvas" width="48" height="48"></canvas>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Scroll</legend>
                        <div class="d-flex justify-content-center">
                            <select id="scroll_type"> </select>
                        </div>
                        <div class="d-flex justify-content-center">
                            <canvas id="scrollcanvas" width="48" height="48"></canvas>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Potions
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center rounded-1 border border-1 border-primary"
                                id="potion_selection">
                                <select id="potion_type"> </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Gold
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center">
                                <select id="gold_type"> </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Skill
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center">
                                <select id="skill_type"> </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Container
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center">
                                <p>Container type: <select id="container_type"> </select></p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <p>Contained item: <select id="content_type"> </select></p>
                            </div>
                            Orientation:<br />
                            <input type="radio" name="orientation" value="FIXED" checked="checked"> FIXED <br />
                            <input type="radio" name="orientation" value="RANDOM"> RANDOM <br />

                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
        GF_oracle3
        <div class="row">
            <div class="col-4">
                <div class="setup_container section">
                    <fieldset>
                        <legend>
                            Wall Texture
                        </legend>
                        <div>
                            <input type="button" id="randwall" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="walltexture"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="wallcanvas" width="320" height="160"></canvas>
                            </div>
                            <div class="d-flex justify-content-center">
                                <p id="wall_resolution"></p>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="col-4">
                <div class="setup_container section">
                    <fieldset>
                        <legend>
                            Floor Texture
                        </legend>
                        <div>
                            <input type="button" id="randfloor" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="floortexture"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="floorcanvas" width="320" height="160"></canvas>
                            </div>
                            <div class="d-flex justify-content-center">
                                <p id="floor_resolution"></p>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="col-4">
                <div class="setup_container section">
                    <fieldset>
                        <legend>
                            Ceiling Texture
                        </legend>
                        <div>
                            <input type="button" id="randceil" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="ceiltexture"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="ceilcanvas" width="320" height="160"></canvas>
                            </div>
                            <div class="d-flex justify-content-center">
                                <p id="ceil_resolution"></p>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <div class=" row">
            <div class="setup_container section">
                <fieldset>
                    <legend>
                        Export:
                    </legend>
                    <textarea id="exp" style="width: 1200px; height: 256px;">
                            124 : {
                                name: "Jeweliet",
                                sg: 0,
                                data: '{"width":"21","height":"15","map":"BB3ABABB2AA4BABB2AA2BB2AA5BAA2BB2ÁAA2ÁÁ3BÁÁ3AA10ÁÁ2AA2ÁBB2ABABAÁÁ2AA2ÁAA5BB4AA24BAA13BABABB3AA2BABB2ABAA10BABB3AA2BAA12BABB2ABB3ABB12AA3BB2ABB3ABB7AA2BB2AA3BB4AA8BB6AA4BB4AA4BAA6BAA2BABB2ABAA6BB2AA2BB34AB$AA7ÁÁ6AA6"}',
                                wall: "DarkRedBricks3",
                                floor: "DarkMarble50",
                                ceil: "SpiderWeb10",
                                start: '[43,5]',
                                decals: '[[4,7,"SpaceQuest103","picture"],[8,7,"Unknown3","picture"],[10,7,"DM104","picture"],[14,7,"LeisureSuitLarry94","picture"],[18,7,"Bagitman90","picture"],[114,7,"Zak50","picture"],[70,7,"TombRaider96","picture"],[151,7,"VIC20-2","picture"],[154,7,"TheHobbit88","picture"],[85,7,"Infiltrator71","picture"],[297,1,"BrianBloodaxe70","picture"],[312,1,"Pitfall27","picture"],[306,1,"DungeonMaster100","picture"],[303,1,"SP66","picture"],[129,1,"Commando201","picture"],[169,1,"MassEffect2","picture"],[216,1,"Ishar13","picture"],[154,1,"KingsQuest52","picture"],[152,1,"RadarRatRace20","picture"],[157,1,"AntAttack4","picture"],[86,5,"Goonies5","picture"],[190,5,"EyeOfTheBeholder140","picture"],[274,5,"Pitfall73","picture"],[279,5,"AztecChallenge101","picture"],[260,5,"DM103","picture"],[237,5,"AntAttack2","picture"],[170,5,"Pirates200","picture"],[130,5,"Ghostbusters200","picture"],[22,5,"Underwurlde140","picture"],[64,5,"Fred112","picture"],[197,5,"Pacman200","picture"],[242,5,"Tutanham12","picture"],[30,5,"Nebulus90","picture"],[116,5,"BrianBloodaxe71","picture"],[179,5,"JetSetWilly60","picture"],[76,5,"LeisureSuitLarry76","picture"],[139,5,"Uridium2","picture"],[223,5,"Witcher112","picture"],[265,5,"SVS111","picture"],[104,3,"Prince51","picture"],[188,3,"Zaxxon3","picture"],[272,3,"RiverRaid70","picture"],[76,3,"BoogaBoo4","picture"],[178,3,"HalfLife13","picture"],[241,3,"LaraCroft1","picture"],[93,3,"Cuthbert70","picture"],[139,3,"AticAtac110","picture"],[111,3,"SexOlympics2","picture"],[257,3,"EnigmaForce2","picture"]]',
                                lights: '[[48,3,"Lamp49","standardDimmed"],[70,5,"Lamp49","standardDimmed"],[237,3,"WallLamp32","standardDimmed"],[62,3,"Lamp51","dimRed"],[146,3,"Lamp51","dimRed"],[230,3,"Lamp51","dimRed"],[293,3,"Lamp51","dimRed"],[265,3,"Lamp49","standardRedish"],[111,7,"WallLamp33","standardRedish"],[12,7,"WallLamp","yellowgreen"],[202,3,"Lamp46","gold"]]',
                                gates: '[[42,5,"124.1","119.6","Up"]]',
                                keys: '[[229,5]]',
                                monsters: '[[269,"Drax"],[227,"Drax"],[185,"Drax"],[143,"Drax"],[101,"Drax"],[59,"Drax"],[73,"GreenSkeleton"],[240,"GreenSkeleton"],[193,"GreenSkeleton"]]',
                                scrolls: '[[50,9]]',
                                potions: '[[56,1],[98,1],[140,1],[203,1],[266,1],[127,1]]',
                                skills: '[[275,"Heart"]]',
                                containers: '[[40,"TreasureChest","INTERACTION_ITEM.FishBone",7],[24,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[191,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[292,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",1],[256,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",1],[124,"Chest","GOLD_ITEM_TYPE.GoldBar",3],[187,"Chest","GOLD_ITEM_TYPE.GoldBar",3],[196,"Chest","GOLD_ITEM_TYPE.GoldBar",3],[68,"Chest","GOLD_ITEM_TYPE.GoldBar",3]]',
                                triggers: '[[160,5,"RockTriggerButton",0,162]]',
                                entities: '[[231,5,"Jeweliet"]]',
                                objects: '[[259,"Blood"]]',
                                }
                        </textarea>
                </fieldset>
            </div>
        </div>

        <div class=" row">
            <p class="cb" id="buttons"></p>
            <p class="version cb terminal" id="version"></p>
        </div>
        <div class=" row">
            <p class="warning"><span>Error: </span><span id="error_message">Everything is fine</span></p>
        </div>
    </div>
</div>

<div id="game" class="winTrans"></div>
<div id="bottom" class="cb" style="margin-top: 1632px"></div>
<div id="temp" class="hidden"></div>
<div id="temp2" class="hidden"></div>
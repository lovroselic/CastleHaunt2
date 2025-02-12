<!-- copy start-->
<div id="preload" class="hidden"></div>
    <div class="container my-5 p-5 cool_page">
        <div id="setup">
            <div id="load"></div>
            <div class="row win">
                <h1 id="title" class="pentagram"></h1>
                <p>Long, long after the Princess defeated GhostFace...</p>
                <p>Her Majesty Hauntessa Spookish, the great haunteress from the Hauntosphere and seventh cousin, fourth
                    degree, of the aforementioned GhostFace, decided to take revenge.</p>
                <p>Why is this of our interest? Because the revenge is aimed at our beloved Princess, who was victorious
                    against GhostFace, leaving her (yes, GhostFace identified as a trans vegan woman (I have no clue
                    what that is ...)) dead in the dust of the lowest dungeon of Castle Creep.</p>
                <p>Hauntessa Spookish raised her lieutenants, the army of Apparitias, to invade the Princess's castle
                    and unleash unimaginable horrors upon its tenants, including but not limited to — listening to polka
                    music. I mean, that is a crime against humanity, right?</p>
                <p>Meanwhile, the Princess is recovering from a gig by the LaughingSkull cover band, who took their tour
                    inside Castle Creep. She had just kicked off her heels and settled in for some beauty sleep, only to
                    wake up to the horrors of an invasion.
                    Give her a nudge, okay, and help her out. Must she really do everything alone?</p>
            </div>
        </div>


        <div class="row my-5">
            <div id="debug" class="section">
                <fieldset>
                    <legend>
                        Engine versions:
                    </legend>
                    ENGINE: <span id="engine_version"></span><br>
                    GRID: <span id="grid_version"></span><br>
                    MAZE: <span id="maze_version"></span><br>
                    IAM: <span id="iam_version"></span><br>
                    Prototype LIB: <span id="lib_version"></span><br>
                    WebGL: <span id="webgl_version"></span><br>
                    MAP Tools: <span id="maptools_version"></span><br>
                </fieldset>
            </div>
        </div>

        <div class="row my-5">
            <div id="savegame_manager" class="section">
                <fieldset>
                    <legend>
                        Manage saved games:
                    </legend>
                    <div id="sgm_content"></div>
                </fieldset>
            </div>
        </div>

        <div>
            <p id="buttons">
            <div>
                <input type='button' id='pause' value='Pause Game [F4]' disabled="disabled">
                <input type='button' id='toggleHelp' value='Show/Hide Instructions'>
                <input type='button' id='toggleAbout' value='About'>
                <input type='button' id='toggleVersion' value='Version'>
                <input type='button' id='toggleSaveGame' value='Saved games'>
            </div>]
            </p>
        </div>

        <div id="help" class="section">
            <fieldset>
                <legend>
                    Instructions:
                </legend>
                <div class="row">
                    <p><strong>Save Game:</strong></p>
                    <p>Game is saved every time you enter an new room. Unless it's not. The reasons that it would not
                        are:
                    </p>
                    <ul class="smallList mx-4">
                        <li>
                            It's part of the game design. You need to do something so it will start saving again.
                        </li>
                        <li>
                            You have not picked your lost orbs ... This is for your benefit, bacause without those orbs,
                            you
                            chances of winning the game are slim. Pick tem, idiot.
                        </li>
                    </ul>
                </div>
                <div class="row px-2 my-2">
                    <div class="col-1">
                        <img src="/Assets/Graphics/Sprites/UI/Floppy64.png" class="img-fluid">
                    </div>
                    <div class="col-11 d-flex align-items-center">
                        <p>Icon indicates that game has been saved at last entry in the new dungeon,</p>
                    </div>
                    <div class="col-1">
                        <img src="/Assets/Graphics/Sprites/UI/Beware64.png" class="img-fluid">
                    </div>
                    <div class="col-11 align-items-center">
                        <p>Icon indicates that game has NOT been saved at last entry in the new dungeon,</p>
                    </div>
                </div>
                <div class="row my-3">
                    <p><strong>Survival guide:</strong></p>
                    <p>You can and should catch your own fiery ghost repelling bouncing orbs.</p>
                    <p>
                        [Green, princess repelling poisonous orbs, those you should avoid. They are bad for your health.
                    </p>
                    <p>Bags and orbs are in limited supply. Game will not save if you don't pick our orbs, as it would
                        ruin your survival chances.</p>

                    <p><strong>KEYS:</strong></p>
                    <p>Mouse to open doors and pick up items and interact with environment</p>
                    <p><kbd>W</kbd> ... move forward</p>
                    <p><kbd>S</kbd> ... move backward</p>
                    <p><kbd>A</kbd> ... strafe left</p>
                    <p><kbd>D</kbd> ... strafe right</p>
                    <p><kbd>Q</kbd> ... turn left</p>
                    <p><kbd>E</kbd> ... turn right</p>
                    <p><kbd>&lt;</kbd> ... align to nearest orthogonal direction</p>
                    <p><kbd>CTRL</kbd> ... cast fiery ghost repelling bouncing orbs</p>

                    <p><kbd>F4</kbd> ... pause/resume game</p>
                    <p><kbd>1</kbd> ... first person view</p>
                    <p><kbd>3</kbd> ... third person view</p>
                    <p><kbd>5</kbd> ... almost top down view</p>
                    <p><kbd>7</kbd> ... top down view, almost</p>

                    <p><strong>SCROLLS:</strong></p>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_Cripple2.png"
                                alt="Cripple" title="Cripple">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Cripple: Decrease speed of the nearby monsters, so that they are practically halted.</p>
                        </div>
                    </div>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_HalfLife2.png"
                                alt="HalfLife" title="HalfLife">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Monster's life energy in the certain range is halved.</p>
                        </div>
                    </div>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_Explode2.png"
                                alt="Bomb" title="Bomb">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Creates huge explosion which will kill everything in the vicinity and also crumble
                                some weak walls.</p>
                        </div>
                    </div>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_Death.png"
                                alt="Bomb" title="Death">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Immediately kills all the enemies close to you. Except those that are immune to this.</p>
                        </div>
                    </div>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_MagicSupremacy.png"
                                alt="MagicSupremacy" title="MagicSupremacy">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Burst of magic that drains your opponent's ability to cast magic missiles. But some are
                                immune to this. And theire missiles still remain.</p>
                        </div>
                    </div>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_DestroyOrbs.png"
                                alt="DestroyOrbs" title="DestroyOrbs">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Burst of magic that destroys all green orbs bouncing around.</p>
                        </div>
                    </div>

                    <div class="row my-2">
                        <div class="col-1">
                            <image class="d-block mx-auto" src="/Assets/Graphics/Sprites/Scrolls/SCR_Invisibility2.png"
                                alt="Invisibility" title="Invisibility">
                        </div>
                        <div class="col-10 mt-auto">
                            <p>Princess becomes invisible .... for a while.</p>
                        </div>
                    </div>


                </div>

            </fieldset>
        </div>

        <div id="about" class="section">
            <fieldset>
                <legend>
                    About:
                </legend>
                <div class="row">
                    <div class="col-12 col-lg-3 my-2 d-flex align-items-center justify-content-center">
                        <image src="https://upload.wikimedia.org/wikipedia/en/f/fa/Atic_Atac_gameplay.png"
                            alt="Atic Atac" class="img-fluid  border-dark rounded-2" title="Atic Atac">
                        </image>
                    </div>
                    <div class="col-12 col-lg-6 my-2">
                        <p>Castle Haunt II is the thrilling sequel to the beloved retro arcade adventure, Castle Haunt.
                            Inspired by the classic ZX Spectrum game, Atic Atac, this game combines nostalgic elements
                            with modern gameplay enhancements. Embark on a captivating journey through a mysterious
                            castle filled with hidden secrets, challenging puzzles, and formidable foes. Whether you're
                            a seasoned fan of the original or a newcomer to the series, Castle Haunt II promises an
                            unforgettable adventure that pays homage to its retro roots while offering a fresh and
                            exciting experience. Prepare yourself for hours of engaging gameplay, as you explore,
                            uncover, and conquer the haunted depths of the castle.</p>
                    </div>
                    <div class="col-12 col-lg-3 my-2 d-flex align-items-center justify-content-center">
                        <image src="/Images/CastleHaunt.webp" alt="Castle Haunt"
                            class="img-fluid  border-dark rounded-2" title="Castle Haunt">
                        </image>
                    </div>
                </div>
            </fieldset>
        </div>

        <p class="version terminal" id="version"></p>
        <p id="conv" class="warning">Loading insane amount of data ... just a minute or two ... be patient
            ... i hope you have good internet speed ... this game is huge (440Mb)!
        </p>
    </div>

    <div class="container">
        <div id="game" class="winTrans"></div>
        <div id="bottom" class="cb" style="margin-top: 1024px"></div>
        <div id="temp" class="hidden"></div>
        <div id="temp2" class="hidden"></div>
    </div>
    <!-- COPY END -->
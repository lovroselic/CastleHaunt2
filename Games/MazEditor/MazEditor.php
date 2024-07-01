<!DOCTYPE html>
<?php include_once $_SERVER['DOCUMENT_ROOT'] . '/Include/globals.php';?>
<html lang="en">

<head>
    <?php include_once $GL_root . $GL_path . '/Include/head_includes.php';?>
    <meta name="description"
        content="Unleash your creativity with 'MazEditor,' a free browser-based dungeon generation editor. Create intricate dungeons for games like The Curse of the Castle Creep, R.U.N, and CrawlMaster II.">
    <meta name="keywords"
        content="MazEditor, dungeon generation editor, game design tool, dungeon master tool, indie game development, create dungeons, game development software, RPG tools, dungeon editor">
    <link rel="canonical" href="https://www.laughingskull.org/Games/MazEditor/MazEditor.php">
    <title>MazEditor</title>
</head>

<body>
    <?php include_once $GL_root . $GL_path . '/Include/header.php';?>
    <?php include_once $GL_root . $GL_path . '/Include/resolutionAlert.php';?>
    <?php include_once $GL_root . $GL_path . '/Games/MazEditor/MazEditorHtml.php';?>
    <?php include_once $GL_root . $GL_path . '/Include/footer.php';?>

    <!-- JS -->
    <script src="/Code/JS/Library/Engine/Prototype_4_00.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/LS_Matrix_1_00.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/ENGINE_4_03.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/GRID_3_11.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/MAZE_4_02.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/BWT_1_00.js" type="text/javascript"></script>
    <script src='/Code/JS/Library/Engine/IndexArrayManagers_3_03.js'></script>
    <script src="/Code/JS/Library/Engine/WebGL_1_04.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/Lights_and_materials_1_01.js" type="text/javascript"></script>
    <script src="/Assets/Definitions/MazEditor/assets_MazEditor.js" type="text/javascript"></script>
    <script src="/Assets/Definitions/CCC/Monsters_CCC.js" type="text/javascript"></script>
    <script src="/Assets/Definitions/MazEditor/MAP_forMazEditor.js" type="text/javascript"></script>
    <script src="/Games/MazEditor/MazEditor.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/MAP and SPAWN tools_1_00.js" type="text/javascript"></script>


    <!-- JS END -->
</body>

</html>
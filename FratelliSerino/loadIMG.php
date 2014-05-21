<?php
    //Imposto la directory da leggere
    $directory = "gallery/".$_POST['dir'];
    $i = 0;
    // Apro la directory e leggo il contenuto.
    if (is_dir($directory))
    {
        //Apro l'oggetto directory
        if ($directory_handle = opendir($directory)) 
        {
            
            //Scorro l'oggetto fino a quando non è termnato cioè false
            while (($file = readdir($directory_handle)) !== false) 
            {
                //Se l'elemento trovato è diverso da una directory 
                //o dagli elementi . e .. lo visualizzo a schermo
                if((!is_dir($file))&($file!=".")&($file!=".."))
                    $res[$i] = $file;
                
                $i++;
            }
            //Chiudo la lettura della directory.
            closedir($directory_handle);
        }
    }
    
    echo json_encode($res);
?>
<?php

get_header();

if (have_posts()) :
    
    while (have_posts()) : the_post(); ?>
    
    <h2><a href="<?php the_permalink(); ?>"><?php the_title();  ?></h2></a>
    
    <?php endwhile;
    
    else:
    
        echo '<p>Sorry, no Dice, no content found</p>';
    
    endif;

get_footer();

?>

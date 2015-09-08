<?php
/**
 * The template for displaying all pages.
 */
 get_header(); 
 ?>
 <?php while (have_posts()) : the_post(); ?>
    <div id="single-top">
        <div class="single-top-content" style="background-image: url(/img/macimage.png);">
            <div style="background-image: url(/img/glass1.png);">
                <div>
                    <h1><?php if(get_the_title($post->ID)) { the_title(); } else { the_time( get_option( 'date_format' ) ); } ?></h1>
                    <h4>by <?php the_author(); ?></h4>
                </div>
            </div>
        </div>
    </div>
    <div id="single-wrapper">
        <?php the_content(); ?>
    </div>
<?php endwhile; ?>
<?php 
get_footer(); 
?>
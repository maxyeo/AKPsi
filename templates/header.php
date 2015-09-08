<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width">
    <title><?php the_title(); ?> | <?php bloginfo('name'); ?></title>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/img/ship.jpg" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header>
        <div class="grid">
        	<!-- <div style="background-image: url(http://proscia.co/wp-content/uploads/2015/01/Logo-silhouette.png);"></div> -->
            <a href="<?php echo home_url(); ?>" id="logo"><div style="background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/img/banner.png);"></div></a>
            
            <nav>
                <?php 
                $args = array(
                    'theme_location' => 'primary',
                    'container' => '',
                    'items_wrap' => '%3$s'
                );
                ?>
                <?php wp_nav_menu( $args ); ?>
            </nav>
            
            <a id="ship">
                <div style="background-image: url(img/ship.jpg);"></div>
            </a>
        </div>
    </header>

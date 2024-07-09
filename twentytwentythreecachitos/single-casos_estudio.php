
<?php if ( isset($_GET['trp']) ) get_header();?>
<div id="case" class="uk-grid">
    <div class="uk-width-2-3">
        
        <?
        if ( function_exists('CFS') ) {
        $loop = CFS()->get( 'imgs_gal' );
        ?>
        <ul class="pictures">   
            <?php
            foreach ( $loop as $row ) {
                $img_ID = $row['img'];
                $img = wp_get_attachment_image( $img_ID, 'large' );
                //$image_url = wp_get_attachment_image_url($img_ID, 'large');
                //$size = wp_get_attachment_image_sizes( $img_ID, 'large', null );

                ?>
                <li>
                    <?php echo $img;?>
                </li>
                <?php
            }
            ?>
        </ul>
        <?php
        }
    ?>
    </div>

    <div class="uk-width-1-3">
        <article>
            <h3>
                <?php echo get_the_title($post_ID);?>
            </h3>
            <?php the_content();?>
        </article>
    </div>
</div>
<?php if ( isset($_GET['trp']) ) get_footer();


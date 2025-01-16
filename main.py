def on_on_overlap(sprite2, otherSprite):
    sprites.destroy(otherSprite)
    info.change_score_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_hit_wall(sprite, location):
    sprites.destroy(Villager)
scene.on_hit_wall(SpriteKind.enemy, on_hit_wall)

Villager: Sprite = None
game.splash("Jeronymus Anonymus", "Diz-Fruta!")
tiles.set_current_tilemap(tilemap("""
    level
"""))
Jeronymus_Anonymus = sprites.create(assets.image("""
        Jeronymus Anonymus
    """),
    SpriteKind.player)
controller.move_sprite(Jeronymus_Anonymus, 150, 0)
Jeronymus_Anonymus.set_position(91, 97)
info.set_score(0)

def on_update_interval():
    global Villager
    Villager = sprites.create(assets.image("""
        Villager
    """), SpriteKind.enemy)
    Villager.set_position(randint(10, 145), 5)
    Villager.set_velocity(0, 10)
game.on_update_interval(500, on_update_interval)

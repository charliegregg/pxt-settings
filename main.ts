controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash("")
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
namespace Blocks {
    //% block="magnitude of 3d vector at x %x and y %y and z %z"
    //% inlineInputMode=inline
    export function mag3d(x: number, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }
    /**
    Computes the square of x
    @param x the number to square
**/
    //% block="square $x"
    //% block.loc.fr="$x au carré"
    //% jsdoc.loc.fr="Calcule le carré de x"
    //% x.loc.fr="le nombre"
    function square(x: number): number { 
        return(x*x)
    }
}
namespace game2wow {
    /**
     * Prompts the user for a boolean question
     * @param title
     * @param subtitle
     */
    //% group="Gameplay"
    //% weight=89 help=game/ask
    //% blockId=gameask block="ask %title||%subtitle"
    //% group="Prompt"
    export function ask(title: string, subtitle?: string): boolean {
        game.eventContext(); // initialize the game
        control.pushEventContext();
        game.showDialog(title, subtitle, "A = OK, B = CANCEL");
        let answer: boolean = null;
        // short pause so that players don't skip through prompt
        pause(500);

        controller.A.onEvent(ControllerButtonEvent.Pressed, () => answer = true);
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => answer = false);
        pauseUntil(() => answer !== null);
        control.popEventContext();
        return answer;
    }
}

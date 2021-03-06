controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    game.splash(convertToText(RollingDice.RollD6(2)), "")
})
namespace Blocks {
    //% block="magnitude of 3d vector at x %x and y %y and z %z"
    //% inlineInputMode=inline
    export function mag3d(x: number, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }
    //% block="magnitude of 3d vector at x %x and y %y and z %z"
    //% inlineInputMode=inline
    export function mag3e(x: number, y: number, z: number): number {
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
    export function square(x: number): number { 
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
//% block="Dice" color=#3b3b3b icon="\uf0c7"
namespace RollingDice {
    /**
     * Rolls a custom dice.
     * @param Sides
     * @param Times
     */
    //% group="Custom"
    //% weight=23
    //% blockId=RollC block="Roll %Sides %Times"
    export function Roll(Sides: number, Times: number): number {
        let Sum = 0
        for (let index = 0; index < Times; index++) {
            Sum = Sum + (Math.randomRange(1, Math.constrain(Sides, 1, 100)))
        }
        return(Sum);
    }
    /**
     * Rolls a D6.
     * @param Times
     */
    //% group="Preset"
    //% weight=22
    //% blockId=RollD6 block="Roll a D6 %Times"
    export function RollD6(Times: number): number {
        return(RollingDice.Roll(6, Times));
    }
    /**
     * Rolls a D8.
     * @param Times
     */
    //% group="Preset"
    //% weight=21
    //% blockId=RollD8 block="Roll a D8 %Times"
    export function RollD8(Times: number): number {
        return (RollingDice.Roll(8, Times));
    }
    /**
     * Rolls a D12.
     * @param Times
     */
    //% group="Preset"
    //% weight=20
    //% blockId=RollD12 block="Roll a D12 %Times"
    export function RollD12(Times: number): number {
        return (RollingDice.Roll(12, Times));
    }
}

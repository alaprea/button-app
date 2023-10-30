let utils = {}

utils.getFile = (mp3) => {
  switch(mp3) {
    case "hellothere.mp3":
      return require('../../assets/sounds/hellothere.mp3')
    case "mada_mada.mp3":
      return require('../../assets/sounds/mada_mada.mp3')
    case "windows_shutdown.mp3":
      return require('../../assets/sounds/windows_shutdown.mp3')
    case "dun_dun.mp3":
      return require('../../assets/sounds/dun_dun.mp3')
    case "error_xp.mp3":
      return require('../../assets/sounds/error_xp.mp3')
    case "fbi-open-up.mp3":
      return require('../../assets/sounds/fbi-open-up.mp3')
    case "hitmarker.mp3":
      return require('../../assets/sounds/hitmarker.mp3')
    case "i_got_you_in_my_sights.mp3":
      return require('../../assets/sounds/i_got_you_in_my_sights.mp3')
    case "i_need_healing.mp3":
      return require('../../assets/sounds/i_need_healing.mp3')
    case "mgs_alert.mp3":
      return require('../../assets/sounds/mgs_alert.mp3')
    case "mission_failed.mp3":
      return require('../../assets/sounds/mission_failed.mp3')
    case "ossas.mp3":
      return require('../../assets/sounds/ossas.mp3')
    case "r2d2_scream.mp3":
      return require('../../assets/sounds/r2d2_scream.mp3')
    case "snoop-dogg.mp3":
      return require('../../assets/sounds/snoop-dogg.mp3')
    case "tactical_visor_activated.mp3":
      return require('../../assets/sounds/tactical_visor_activated.mp3')
    case "shrek.mp3":
      return require('../../assets/sounds/shrek.mp3')
    case "why_are_we_here.mp3":
      return require('../../assets/sounds/why_are_we_here.mp3')
    case "why_are_you_running.mp3":
      return require('../../assets/sounds/why_are_you_running.mp3')
    case "wilhelm_scream.mp3":
      return require('../../assets/sounds/wilhelm_scream.mp3')
    case "zelda_secret.mp3":
      return require('../../assets/sounds/zelda_secret.mp3')
    default:
      return null;
  }
}

export default utils;
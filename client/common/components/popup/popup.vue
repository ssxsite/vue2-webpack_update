<template>
    <div class="popupBox" v-if="s_isShowPup">
			<transition name="popup-window-transition">
				<div class="popup-window-modal-mask" :style="{zIndex:s_popIndex,position:type == 1?'absolute':'fixed'}">
					<div class="popup-window-modal-wrapper"  @click="clickPopHandle()"  :style="{zIndex:s_popIndex+1,position:type == 1?'absolute':'fixed'}">
						<div class="popup-window-modal-container-bottom" v-if="position == 'bottom'" @click="contentClick($event)" :style="{zIndex:s_popIndex+2,position:type == 1?'absolute':'fixed'}">
              <slot></slot>
						</div>
						<div class="popup-window-modal-container-left" v-else-if="position == 'left'" :style="[{'width':s_width}]">
              <slot></slot>
						</div>
            <div class="popup-window-modal-container-center" v-else>
              <slot></slot>
            </div>
					</div>
				</div>
			</transition>

    </div>
</template>

<script src="./popup.js"></script>

<style lang="" scoped>
@import "./popup.scss";
</style>

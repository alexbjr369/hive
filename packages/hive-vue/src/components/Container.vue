<script lang="ts">
import { ContainerSizeValues } from '@alexbjr369/hive-common';
import type { PropType } from 'vue';
import { computed, defineComponent, reactive } from 'vue';

interface HvContainerProps {
  size?: ContainerSizeValues;
}

export default defineComponent({
  name: 'hv-container',
  props: {
    size: {
      type: String as PropType<HvContainerProps>,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'hv-container': true,
        [`hv-container_${props.size}`]: props.size !== undefined,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<style></style>

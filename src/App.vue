<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Quill from 'quill'
import '@/styles/quill.snow.css'
import Delta from "quill-delta/dist/Delta";

const editorElm = ref<HTMLElement>()
let quill:Quill;
const content = ref<Delta>();
const format = ref<{
        [format: string]: unknown;
    }>({})
onMounted(() => {
  console.log('on mounted ', editorElm.value)
  if (!editorElm.value) return

  quill = new Quill(editorElm.value, {
    theme: 'snow',
    placeholder: 'Enter something',
    modules: {
      toolbar: false
      //toolbar:  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    },
  })

  quill.on('editor-change', (eventName, ...args)=>{
    if (eventName === 'text-change') {
      content.value = args[0] as Delta
    } else if (eventName === 'selection-change') {
      format.value = quill.getFormat()
    }
  })
})

const setFormat = (name:string, value: unknown) => {
  quill.format(name, value)
  format.value[name] = value
}

const removeFormat = () => {
  const select = quill.getSelection()
  if(select) {
    quill.removeFormat(select.index, select.length)
  }
}

</script>

<template>
  <v-app>
    <!-- <v-app-bar density="compact">
      <v-app-bar-title>Perbrain</v-app-bar-title>
    </v-app-bar> -->

    <v-navigation-drawer permanent rail>
      <v-list density="compact" nav>
        <v-list-item to="/notes" prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>

        <v-list-item to="/chats" prepend-icon="mdi-forum" value="messages"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer permanent>
      <v-toolbar density="compact" >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-pencil-plus"></v-btn>
      </v-toolbar>

      <v-list>
        <v-list-item title="Home" to="/notes/1"></v-list-item>

        <v-list-item title="Contacts" to="/notes/2"></v-list-item>

        <v-list-item title="Settings" to="/notes/3"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-toolbar density="compact">
        <!-- <v-toolbar-title>Title</v-toolbar-title> -->

        <v-btn icon="mdi-format-letter-case">
          
          <v-menu activator="parent">
            <v-list density="compact">
              <v-btn-group density="compact">
                <v-btn @click="setFormat('bold', !format.bold)" :active="Boolean(format.bold)" icon="mdi-format-bold"></v-btn>
                <v-btn @click="setFormat('italic', !format.italic)" :active="Boolean(format.italic)" icon="mdi-format-italic"></v-btn>
                <v-btn @click="setFormat('underline', !format.underline)" :active="Boolean(format.underline)" icon="mdi-format-underline" ></v-btn>
                <v-btn @click="setFormat('strike', !format.strike)" :active="Boolean(format.strike)" icon="mdi-format-strikethrough-variant" ></v-btn>
<!--
                <v-btn>
                  <v-icon>mdi-format-color-fill</v-icon>
                </v-btn> -->
              </v-btn-group>
              <v-divider class="mx-2 my-2"></v-divider>

              <v-list-item @click="setFormat('header', 1)" :active="format.header === 1" title="h1 Title" ></v-list-item>
              <v-list-item @click="setFormat('header', 2)" :active="format.header === 2" title="h2 Heading" ></v-list-item>
              <v-list-item @click="setFormat('header', 3)" :active="format.header === 3" title="h3 Subheading" ></v-list-item>
              <v-list-item @click="removeFormat" :active="Object.keys(format).length === 0" title="Body (reset)" ></v-list-item>
              <v-list-item @click="setFormat('code-block', !format['code-block'])" :active="Boolean(format['code-block'])" title="Monostyled"></v-list-item>

              <v-list-item @click="setFormat('list', 'bullet')" :active="format.list === 'bullet'" title="* Bulleted List" ></v-list-item>
              <v-list-item @click="setFormat('list', 'ordered')" :active="format.list === 'ordered'" title="1. Numbered List" ></v-list-item>
              <v-list-item @click="setFormat('list', 'unchecked')" :active="format.list === 'check'" title="[ ] Check List" ></v-list-item>

              <v-divider class="mx-2 my-2"></v-divider>
              <v-list-item @click="setFormat('blockquote', true)" :active="Boolean(format.blockquote)" title="| Block Quote" ></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="fill-height">
        <div ref="editorElm"></div>
      </v-card>
    </v-main>
  </v-app>
</template>

<style scoped></style>

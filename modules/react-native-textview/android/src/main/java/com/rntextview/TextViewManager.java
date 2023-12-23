package com.rntextview;

import android.graphics.Color;
import android.util.Log;
import android.view.View;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

/**
 * TextViewManager support new/old arch
 */
public class TextViewManager extends TextViewManagerSpec<Textview> {

  public static final String NAME = "RNTextview";

  private static final String NATIVE_ON_CLICK_METHOD = "onClick";
  private static final String JS_ON_CLICK_METHOD = "onClick";

  private ReactContext mReactContext = null;

  public TextViewManager(ReactApplicationContext context)
  {
    Log.d("TextViewManager", "init");
    mReactContext = context;
  }

  @NonNull
  @Override
  public String getName() {
    return NAME;
  }

  @NonNull
  @Override
  protected Textview createViewInstance(@NonNull ThemedReactContext themedReactContext) {
    Log.d("TextViewManager", "createViewInstance");
    Textview textView = new Textview(themedReactContext);
    textView.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
    textView.setTextSize(24);
    textView.setOnClickListener(v -> {
      Log.d("TextViewManager", "send onClick event");
      WritableMap event = Arguments.createMap();
      event.putString("message", "someValue");
      mReactContext.getJSModule(RCTEventEmitter.class).receiveEvent(textView.getId(), NATIVE_ON_CLICK_METHOD, event);
    });
    return textView;
  }

  @Nullable
  @Override
  public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
    // Map native method to js method
    return MapBuilder.of(
            NATIVE_ON_CLICK_METHOD,
            MapBuilder.of(
                    "phasedRegistrationNames",
                    MapBuilder.of("bubbled", JS_ON_CLICK_METHOD)
            )
    );
  }

  @ReactProp(name = "text")
  @Override
  public void setText(Textview textView, String text) {
    Log.d("TextViewManager", "setText, text = " + text);
    textView.setText(text);
  }

  @ReactProp(name = "textColor")
  @Override
  public void setTextColor(Textview textView, String color) {
    Log.d("TextViewManager", "setTextColor, color = " + color);
    textView.setTextColor(Color.parseColor(color));
  }
}
